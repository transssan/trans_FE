import { createPlayerContainers } from "./state";
import pingPongImage from "../statics/images/ping-pong.png";
import diceImage from "../statics/images/dice.png";
{
  /* <img id="pong-img" src="${"/images/ping-pong.png"}" alt="Pong Game" /> */
}

export const mainPageLanguage = {
  ko: `
    <div id="main-container">
        <div id="pong" class="main_row game-select-button" data-link>
            <p>Pong Game</p>
            <img id="pong-img" src="${pingPongImage}" alt="Pong Game" />
        </div>
        <div id="dice" class="main_row game-select-button" data-link>
            <img id="dice-img" src="${diceImage}" alt="Pong Game" />
            <p>Dice Game</p>
        </div>
    </div>
  `,
  en: `
        <div id="mainTest">
            <h1>Main Page</h1>
        </div>`,
  jp: `
        <div id="mainTest">
            <h1>メインページ</h1>
        </div>
    `,
};

export const PongPageLanguage = {
  ko: `
      <div id="container">
          <div id="mode-select">
            <p>Mode Select</p>
            <img id="pong-img" src="${pingPongImage}" alt="Pong Game" />
          </div>
          <div id="mode-container">
            <div class="pong-mode">
                <p>Slow</p>
                <div id="pong-select-container">
                    <div id="slow_two"  class="game-mode pong-select">two player</div>
                    <div id="slow_four" class="game-mode pong-select">four player</div>
                </div>
            </div>
            <div class="pong-mode">
                <p>Normal</p>
                <div id="pong-select-container">
                    <div id="normal_two"  class="game-mode pong-select">two player</div>
                    <div id="normal_four" class="game-mode pong-select">four player</div>
                </div>
            </div>
            <div class="pong-mode">
                <p>Extreme</p>
                <div id="pong-select-container">
                    <div id="extreme_two"  class="game-mode pong-select">two player</div>
                    <div id="extreme_four" class="game-mode pong-select">four player</div>
                </div>
            </div>
          </div>
      </div>`,
  en: `
      <div class="login-container">
          <div id="game-title">LOGIN VIEW</div> 
          <div id= "login-button" data-link>LogIn</div>
      </div>
                            `,
  jp: `
      <div class="login-container">
          <div id="game-title">
          ログイン画面</div> 
          <div id= "login-button" data-link>ログイン</div>
      </div>
                            `,
};

// 게임 화면에선 언어 변경 불가능
export const PongRoomPageLanguage = (id) => {
  return {
    ko: `
        <div id="container">
          <div id="mode-select">
            <p>Register Members</p>
            <img id="pong-img" src="${pingPongImage}" alt="Pong Game" />
          </div>
          <div id="mode-container">
            <div id="input-container">
              ${createPlayerContainers(id)}
              <div id="pong" class="game_start_button">READY!</div>
            </div>
          </div>
        </div>
      `,
    en: `
        <div class="login-container">
          <div id="game-title">LOGIN VIEW</div> 
          <div id="login-button" data-link>LogIn</div>
        </div>
      `,
    jp: `
        <div class="login-container">
          <div id="game-title">ログイン画面</div> 
          <div id="login-button" data-link>ログイン</div>
        </div>
      `,
  };
};

export const PongGamePageLanguage = {
  ko: `
        <div id="container">
            <div>pong game view</div>
        </div>`,
  en: `
        <div id="container">
            <div>pong game view</div>
        </div>`,
  jp: `
        <div id="container">
            <div>pong game view</div>
        </div>`,
};

export const DicePageLanguage = {
  ko: `
    <div id="container">
        <div id="mode-select" class="reverse-linear">
            <img id="dice-img" src="${diceImage}" alt="Pong Game" />
            <p>Mode Select</p>
        </div>
        <div id="mode-container">
            <div id="_two"  class="game-mode dice-mode">Two player</div>
            <div id="_four" class="game-mode dice-mode">Four Player</div>
        </div>
    </div> 
                        `,
  en: `
    <div class="oneVsOne">
        <h1>1vs1</h1>
        <p>room code</p>
        <input type="text" id="room-code" />
        <button id="room-code-button">create</button>		
    </div>
                      `,
  jp: `
    <div class="oneVsOne">
        <h1>1vs1</h1>
        <p>ルームコード</p>
        <input type="text" id="room-code" />
        <button id="room-code-button">ルームコード</button>		
    </div>
                        `,
};

export const DiceRoomPageLanguage = (id) => {
  return {
    ko: `
        <div id="container">
          <div id="mode-select" class="reverse-linear">
            <img id="dice-img" src="${diceImage}" alt="Pong Game" />
            <p>Register Members</p>
        </div> 
          <div id="mode-container">
            <div id="input-container">
              ${createPlayerContainers(id)}
              <div id="dice" class="game_start_button">READY!</div>
            </div>
          </div>
        </div>
      `,
    en: `
                      <div class="tournament-container">
                          <h1>tournament nickname</h1>
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <button id="tournament-start-button">create</button>
                      </div>
                    `,
    jp: `
                      <div class="tournament-container">
                          <h1>大会ニックネーム</h1>
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <input type="text" class="tournament-nickname" maxlength="5" /> 
                          <button id="tournament-start-button">作成する</button>
                      </div>
                      `,
  };
};

export const DiceGamePageLanguage = {
  ko: `
          <div id="container">
              <div>Dice game view</div>
          </div>`,
  en: `
          <div id="container">
              <div>Dice game view</div>
          </div>`,
  jp: `
          <div id="container">
              <div>Dice game view</div>
          </div>`,
};

export const VerifyTwoFaPageLanguage = {
  ko: `
                        <div>
                            <div>2fa Verify Modal</div>
                            <input type="text" id="2fa-submit-content" placeholder="2fa code" />
                            <div id="2fa-submit"/>제출</div>
                        </div>
                    `,
  en: `
                        <div>
                            <div>2fa Verify Modal</div>
                            <input type="text" id="2fa-submit-content" placeholder="2fa code" />
                            <div id="2fa-submit"/>제출</div>
                        </div>
                  `,
  jp: `
                        <div>
                            <div>2fa Verify Modal</div>
                            <input type="text" id="2fa-submit-content" placeholder="2fa code" />
                            <div id="2fa-submit"/>제출</div>
                        </div>
                    `,
};

export const TourGamePageLanguage = {
  ko: `
                        <div class="ball-speed-buttons">
                            <div class="ball-speed-button" style="background-color: green;"></div>
                            <div class="ball-speed-button" style="background-color: yellow;"></div>
                            <div class="ball-speed-button" style="background-color: red;"></div>
                        </div>
                        <div class="game-screen">
                        <div id="tournament-game-start">Tour game start</div>
                        <div id="tournament-list-container"></div>
                            <div class="game-player">
                                <div>
                                    <label>PlayerOne:</label>
                                    <span id="tour-playerOneScore">0</span>
                                </div>
                                <div>
                                    <label>PlayerTwo:</label>
                                    <span id="tour-playerTwoScore">0</span>
                                </div>
                            </div>
                            <canvas id="tour-gameCanvas"></canvas>
                        </div>
                    `,
  en: `
                        <div class="ball-speed-buttons">
                            <div class="ball-speed-button" style="background-color: green;"></div>
                            <div class="ball-speed-button" style="background-color: yellow;"></div>
                            <div class="ball-speed-button" style="background-color: red;"></div>
                        </div>
                        <div class="game-screen">
                        <div id="tournament-game-start">Tour game start</div>
                        <div id="tournament-list-container"></div>
                            <div class="game-player">
                                <div>
                                    <label>PlayerOne:</label>
                                    <span id="tour-playerOneScore">0</span>
                                </div>
                                <div>
                                    <label>PlayerTwo:</label>
                                    <span id="tour-playerTwoScore">0</span>
                                </div>
                            </div>
                            <canvas id="tour-gameCanvas"></canvas>
                        </div>
                  `,
  jp: `
                        <div class="ball-speed-buttons">
                            <div class="ball-speed-button" style="background-color: green;"></div>
                            <div class="ball-speed-button" style="background-color: yellow;"></div>
                            <div class="ball-speed-button" style="background-color: red;"></div>
                        </div>
                        <div class="game-screen">
                        <div id="tournament-game-start">Tour game start</div>
                        <div id="tournament-list-container"></div>
                            <div class="game-player">
                                <div>
                                    <label>PlayerOne:</label>
                                    <span id="tour-playerOneScore">0</span>
                                </div>
                                <div>
                                    <label>PlayerTwo:</label>
                                    <span id="tour-playerTwoScore">0</span>
                                </div>
                            </div>
                            <canvas id="tour-gameCanvas"></canvas>
                        </div>
                    `,
};

export const twoFactorPageLanguage = {
  ko: `
                        <div class="game-container">
                            <div id="two-fa-title">이중 보안</div>
                            <button id="2fa-toogle" class="btn btn-primary loading-btn" type="button">
                                <span id="loading-tag" class="spinner-border spinner-border-sm visually-hidden" role="status" aria-hidden="true"></span>
                                <span class="visually">이중 보안 검사</span>
                            </button>
                        </div>
                        `,
  en: `
                        <div class="game-container">
                            <div id="two-fa-title">Two Factor Authentication</div>
                            <button id="2fa-toogle">check</button>
                        </div>
                      `,
  jp: `
                        <div class="game-container">
                            <div id="two-fa-title">二要素認証</div>
                            <button id="2fa-toogle">チェック</button>
                        </div>`,
};
