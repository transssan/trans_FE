import { navigateTo } from "./router";
import { players, pongGameMode, setPongGameMode } from "./state";
import { isValidPlayerNames } from "./utils";

export const clickMainTitle = () => {
  navigateTo("/main");
};

export const clickGameStart = (id) => {
  const playerNameInputs = document.querySelectorAll(".player_name");
  playerNameInputs.forEach((input, index) => {
    players[index] = input.value;
  });
  console.log("game starting players", players);
  // TODO: alert 메시지 언어별로 바꾸기?
  // alert도 언어가 바뀔때 바뀌어야 하나?
  if (isValidPlayerNames(players) === false) {
    alert("영어로 입력하고 빈 문자열은 안됩니다");
    return;
  }

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

export function clickGameMode(id) {
  if (id === "pong") navigateTo("/pong");
  else if (id === "dice") navigateTo("/dice");
}

export function onClickLoginButton() {
  // OAUTH 로그인 하기
  alert("oauth 로그인");
  // navigateTo("/pong/room");
}

export const clickChangeLanguage = () => {
  const btnGroup = document.querySelector(".btn-group");

  if (!btnGroup) return;

  // 이미 이벤트 리스너가 추가되었는지 확인
  if (!btnGroup.hasAttribute("data-event-attached")) {
    btnGroup.addEventListener("change", (event) => {
      if (event.target.classList.contains("btn-check")) {
        const selectedBtnId = event.target.id;
        console.log(`Selected button: ${selectedBtnId}`);
      }
    });

    // 이벤트 리스너가 추가되었음을 표시
    btnGroup.setAttribute("data-event-attached", "true");
  }
};
