import Swal from "sweetalert2";

export class GameResults {
  constructor(nickname, secret, score) {
    this.nickname = nickname;
    this.score = score;
    this.secret = secret;
    this.timestamp = new Date();
  }
}

export function requestJSON(e) {
  e.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const secret = document.getElementById("secret").value;
  const score = parseInt(document.getElementById("gameScore").innerText);

  const gameResult = new GameResults(nickname, secret, score);
  createRequest(gameResult);
}

async function createRequest(object) {
  const url = "https://api.diecezko.cz/";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });

  response.json().then((data) => {
    if (data.status === "OK") {
      Swal.fire({
        title: "Evženova síň",
        text: "Požadavek na vytesání Tvojí přezdívky do síně slávy byl zaznamenán. Schvalování může chvilku trvat.",
        icon: "success",
        confirmButtonColor: "#0078D4",
      });
    } else {
      Swal.fire({
        title: "Evženova síň",
        text: "V procesu tesání Tvojí přezdívky do síně slávy byl zaznamenán problém. Prosíme, zkus to znovu, nebo si udělej screenshot a ten nám pošli.",
        icon: "error",
        confirmButtonColor: "#0078D4",
      });
    }
  });
}
