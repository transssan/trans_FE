export const isValidPlayerNames = (playerNames) => {
  // 배열이 아닌 경우 false 반환
  if (!Array.isArray(playerNames)) {
    return false;
  }

  // 각 이름 검사
  for (const name of playerNames) {
    // 영어 문자열 검사
    const englishRegex = /^[a-zA-Z]+$/;
    if (!englishRegex.test(name)) {
      return false;
    }

    // 빈 문자열 검사
    if (name.trim() === "") {
      return false;
    }
  }

  return true;
};
