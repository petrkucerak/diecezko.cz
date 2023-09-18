// Board parametrs
let board;
const width = window.innerWidth;
const height = window.innerHeight - 64;
let context;

// piegon parameters
const piegonHeight = 50;
const piegonWidth = 50;
let piegonX = 10;
let piegonY = height - piegonHeight - 11;
const piegonImgPaths = [
  "/assets/images/game/pigeon_walking_01.png",
  "/assets/images/game/pigeon_walking_02.png",
  "/assets/images/game/pigeon_walking_03.png",
  "/assets/images/game/pigeon_walking_04.png",
];
let piegonImg;

// graund
const groundColorPath = "/assets/images/game/ground.png";
const groundHeight = 6 * 2;
const groundWidth = 1075 * 2;
let groundImg;

let piegon = {
  x: piegonX,
  y: piegonY,
  width: piegonWidth,
  height: piegonHeight,
  animationNo: 0,
};

let ground = {
  x: 0,
  y: height - groundHeight,
  width: groundWidth,
  height: groundHeight,
};

window.onload = () => {
  board = document.getElementById("game");
  board.width = width;
  board.height = height;

  context = board.getContext("2d");

  // load ground
  groundImg = new Image();
  groundImg.src = groundColorPath;

  // draw ground
  groundImg.onload = () => {
    context.drawImage(
      groundImg,
      ground.x,
      ground.y,
      ground.width,
      ground.height
    );
  };

  // load pigon images
  piegonImg = [new Image(), new Image(), new Image(), new Image()];
  piegonImg[0].src = piegonImgPaths[0];
  piegonImg[1].src = piegonImgPaths[1];
  piegonImg[2].src = piegonImgPaths[2];
  piegonImg[3].src = piegonImgPaths[3];

  // draw piegon
  piegonImg[0].onload = () => {
    context.drawImage(
      piegonImg[piegon.animationNo],
      piegon.x,
      piegon.y,
      piegon.width,
      piegon.height
    );
  };

  requestAnimationFrame(update);
  setInterval(placeBorder, 1000); // spawn building
  setInterval(piegonMove, 50); // 0.1s
  setInterval(moveGround, 10);
};

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  context.drawImage(groundImg, ground.x, ground.y, ground.width, ground.height);

  context.drawImage(
    piegonImg[piegon.animationNo],
    piegon.x,
    piegon.y,
    piegon.width,
    piegon.height
  );
}

function placeBorder() {}

function piegonMove() {
  piegon.animationNo == 3
    ? (piegon.animationNo = 0)
    : (piegon.animationNo = piegon.animationNo + 1);
}

function moveGround() {
  if (ground.x == -102) ground.x = 0;
  else ground.x -= 1;
}
