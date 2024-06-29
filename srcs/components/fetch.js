export async function checkJwt() {
  const response = await fetch(process.env.USER_VERIFY, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      jwt: sessionStorage.getItem("loginToken"),
    },
  });
  if (response.ok) {
    return true;
  } else {
    return false;
  }
}

export function verifyTwoFA() {
  const $appElement = document.getElementById("app");
  const data = {
    nickname: sessionStorage.getItem("nickName"),
    token: document.getElementById("2fa-submit-content")?.value ?? null,
  };

  if (!data.nickname) return;
  if (!data.token) return;

  fetch(process.env.TWO_FACTOR_VERIFY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt: sessionStorage.getItem("loginToken"),
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          sessionStorage.setItem("loginToken", data.new_jwt_token);
        });

        history.pushState(null, null, "/main");
        $appElement.innerHTML = "";
        router();
      } else {
        history.pushState(null, null, "/login");
        $appElement.innerHTML = "";
        router();
      }
    })
    .catch((error) => {});
}

export function createTwoFA() {
  const $appElement = document.getElementById("app");
  const nickName = { nickname: sessionStorage.getItem("nickName") };
  if (!nickName.nickname) return;
  fetch(process.env.TWO_FACTOR_CREATE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt: sessionStorage.getItem("loginToken"),
    },
    body: JSON.stringify(nickName),
  })
    .then((res) => {
      if (res.ok) {
      } else {
        history.pushState(null, null, "/login");
        $appElement.innerHTML = "";
        router();
      }
    })
    .catch((error) => {});
}

export const OAUTH_REDIRECT_URL =
  process.env.FORTYTWO_AUTHORIZE_URL +
  "?client_id=" +
  process.env.OAUTH_CLIENT_ID +
  "&redirect_uri=" +
  process.env.FORTYTWO_REDIRECT_URI +
  "&response_type=code";

export function setLogIn() {
  window.location.href = OAUTH_REDIRECT_URL;
}

export function handleOAuthRedirect() {
  const url = window.location.href;
  if (!url.includes("code=")) return;
  const accessToken = url.split("code=")[1];
  setLoadingState();
  fetch(process.env.OAUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: accessToken,
    }),
  }).then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        sessionStorage.setItem("loginToken", data.jwt_token);
        sessionStorage.setItem("nickName", data.nickname);
        sessionStorage.setItem("language", data.language);
        sessionStorage.setItem("two_factor", !data.two_factor);
        if (data.two_factor === false) {
          navigateTo("/twoFA");
        } else {
          navigateTo("/main");
        }
        setLoadingState();
      });
    } else {
      alert("로그인에 실패했습니다.");
      setLoadingState();
      navigateTo("/login");
    }
  });
}
