export let players = [];

export function resetPlayers() {
  players = [];
}

export let pongGameMode = "";

export function setPongGameMode(mode) {
  pongGameMode = mode;
}

export function resetPongGameMode() {
  pongGameMode = "";
}

export const createPlayerContainers = (count) => {
  let containers = "";
  for (let i = 1; i <= count; i++) {
    const playerOrder =
      i === 1 ? "first" : i === 2 ? "second" : i === 3 ? "third" : "fourth";
    containers += `
      <div id="player${i}" class="player_container">
        <p>${playerOrder} player</p>
        <input type="text" class="player_name" />
      </div>
    `;
  }
  return containers;
};

export const createPongGameHtml = () => {
  return `
        <div>pong game view<div>
    `;
};
