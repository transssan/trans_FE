import Dice from "../pages/Dice";
import DiceGame from "../pages/DiceGame";
import DiceRoom from "../pages/DiceRoom";
import Main from "../pages/Main";
import NotFoundPage from "../pages/NotFountPage";
import Pong from "../pages/Pong";
import PongGame from "../pages/PongGame";
import PongRoom from "../pages/PongRoom";
import TwoFactor from "../pages/TwoFactor";
import {
  clickMainTitle,
  clickGameStart,
  clickPongMode,
  onClickLoginButton,
  clickGameMode,
} from "./click";
import { players } from "./state";

export const router = async () => {
  const $routes = [
    { path: "/404", view: NotFoundPage },
    { path: "/main", view: Main },
    { path: "/pong", view: Pong },
    { path: "/pong/room/:id", view: PongRoom },
    { path: "/pong/game", view: PongGame },
    { path: "/dice", view: Dice },
    { path: "/dice/room/:id", view: DiceRoom },
    { path: "/dice/game", view: DiceGame },
    { path: "/twofactor", view: TwoFactor },
    // { path: "/game/:id", view: Game }, // 동적 라우트 예시
    // 다른 라우트들...
  ];

  const normalizePath = (path) =>
    path.endsWith("/") ? path.slice(0, -1) : path;

  const pathToRegex = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

  const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  };

  const $potentialMatches = $routes.map((route) => {
    return {
      route,
      result: normalizePath(location.pathname).match(pathToRegex(route.path)),
    };
  });

  console.log("potentialMatches", $potentialMatches);
  let match = $potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: $routes[0],
      result: [location.pathname],
    };
  }

  const params = getParams(match);

  // 나중에 최적화.. 과연 할까
  if (
    players.length === 0 &&
    (match.route.path === "/pong/game" || match.route.path === "/dice/game")
  ) {
    if (match.route.path === "/pong/game") navigateTo("/pong");
    else navigateTo("/dice");
  } else {
    // 메모리 적재
    console.log("params", params);
    const $view = new match.route.view(params);

    document.querySelector("#app").innerHTML = await $view.getHtml();

    buttons();
    console.log("route players", players);
  }
};

// URL 변경
const isLoggedIn = false;
export async function navigateTo(url) {
  const $appElement = document.getElementById("app");
  if (!isLoggedIn) {
    history.pushState(null, null, url);
    $appElement.innerHTML = "";
  } else {
    history.pushState(null, null, "/main");
    $appElement.innerHTML = "";
  }
  router();
}

export async function buttons() {
  const buttonList = [
    {
      // id: "pong-button",
      class: "game-select-button",
      event: "click",
      handler: (id) => clickGameMode(id),
    },
    {
      // id: "1vs1-button",
      class: "language-button",
      event: "click",
      handler: (id) => clickGameMode(id),
    },
    {
      class: "game-mode",
      event: "click",
      handler: (id) => clickPongMode(id),
    },
    {
      class: "game_start_button",
      event: "click",
      handler: (id) => clickGameStart(id),
    },
    {
      id: "main-title",
      event: "click",
      handler: () => clickMainTitle(),
    },
    {
      id: "login_button",
      event: "click",
      handler: () => onClickLoginButton(),
    },
  ];

  buttonList.forEach((button) => {
    let elements = [];

    if (button.id) {
      const idElement = document.getElementById(button.id);
      if (idElement) elements.push(idElement);
    }

    if (button.class) {
      const classElements = document.getElementsByClassName(button.class);
      elements = elements.concat(Array.from(classElements));
      // console.log("elements", elements);
    }

    elements.forEach((element) => {
      element.addEventListener(button.event, () =>
        button.handler(button.id || element.id)
      );
    });
  });
}
