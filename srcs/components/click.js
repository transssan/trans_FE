import { navigateTo } from "./router";
import { players, pongGameMode, setPongGameMode } from "./state";

export const clickMainTitle = () => {
  navigateTo("/main");
};

export const clickPongGame = (id) => {
  const playerNameInputs = document.querySelectorAll(".player_name");
  playerNameInputs.forEach((input, index) => {
    players[index] = input.value;
  });
  console.log("players", players);
  if (id === "pong") navigateTo("/pong/game");
  else if (id === "dice") navigateTo("/dice/game");
};

export function clickPongMode(id) {
  const [mode, players] = id.split("_");
  let navigateToUrl;
  if (mode == "") {
    switch (players) {
      case "two":
        navigateToUrl = "/dice/room/2";
        break;
      case "four":
        navigateToUrl = "/dice/room/4";
        break;
      default:
        console.error("Invalid players value:", players);
        return;
    }
  } else {
    switch (players) {
      case "two":
        navigateToUrl = "/pong/room/2";
        break;
      case "four":
        navigateToUrl = "/pong/room/4";
        break;
      default:
        // 예상치 못한 값이 들어온 경우 처리
        console.error("Invalid players value:", players);
        return;
    }
    setPongGameMode(mode);
  }
  console.log("mode", mode);
  navigateTo(navigateToUrl);
}

export function startGame(id) {
  if (id === "pong") navigateTo("/pong");
  else if (id === "dice") navigateTo("/dice");
}

export function onClickLoginButton() {
  // OAUTH 로그인 하기
  alert("oauth 로그인");
  // navigateTo("/pong/room");
}
