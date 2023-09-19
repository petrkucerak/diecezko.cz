export class GameResults {
  constructor(nickname, score) {
    this.nickname = nickname;
    this.score = score;
    this.timestamp = new Date();
  }
}

export function requestJSON(e) {
  e.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const score = parseInt(document.getElementById("gameScore").innerText);

  const gameResult = new GameResults(nickname, score);
  console.log(gameResult);
}
