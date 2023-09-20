import fs from "fs";
export function getScore() {
  const files = fs.readdirSync("./_hall");
  let score = new Array();
  for (let i = 0; i < files.length; i += 1) {
    const path = files[i];
    const content = JSON.parse(fs.readFileSync(`./_hall/${path}`, "utf-8"));
    // check if nickname is exist?
    const existence = isNicknameExists(score, content.nickname);
    if (!existence.exitence) score.push(content);
    else
      score[existence.id].score < content.score
        ? (score[existence.id].score = content.score)
        : null;
  }
  let sortedScore = score.sort(compareScore);
  for (let i = 0; i < sortedScore.length; i += 1) sortedScore[i].index = i;
  return sortedScore;
}

function isNicknameExists(array, nickname) {
  for (let i = 0; i < array.length; i += 1)
    if (array[i].nickname === nickname) return { exitence: true, id: i };
  return { exitence: false, id: null };
}

export function compareScore(a, b) {
  return b.score - a.score;
}
