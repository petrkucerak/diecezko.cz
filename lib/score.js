import fs from "fs";
export function getScore() {
  const files = fs.readdirSync("./_hall");
  let score = new Array();
  files.map((path) => {
    const content = fs.readFileSync(`./_hall/${path}`, "utf-8");
    score.push(JSON.parse(content));
  });
  return score;
}
