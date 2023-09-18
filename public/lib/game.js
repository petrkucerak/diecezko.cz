let gameOver = false;

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
  "/assets/images/game/pigeon_fly_01.png",
  "/assets/images/game/pigeon_fly_02.png",
  "/assets/images/game/pigeon_fly_03.png",
  "/assets/images/game/pigeon_fly_04.png",
  "/assets/images/game/pigeon_fly_05.png",
  "/assets/images/game/pigeon_fly_06.png",
  "/assets/images/game/pigeon_fly_07.png",
];
let piegonImg;

let piegon = {
  x: piegonX,
  y: piegonY,
  width: piegonWidth,
  height: piegonHeight,
  animationNo: 0,
  isPiegonJumpingTop: false,
  isPiegonJumping: false,
};

// graund
const groundColorPath = "/assets/images/game/ground.png";
const groundHeight = 6 * 2;
const groundWidth = 1075 * 2;
let groundImg;

let ground = {
  x: 0,
  y: height - groundHeight,
  width: groundWidth,
  height: groundHeight,
};

// matous
const matousColorPath = "/assets/images/game/matous.png";
const matousHeight = 200 * 0.5;
const matousWidth = 150 * 0.5;
let matousImg;

let matous = {
  x: 600,
  y: height - groundHeight - matousHeight,
  width: matousWidth,
  height: matousHeight,
};

// MAIN FUNCTION
window.onload = () => {
  board = document.getElementById("game");
  board.width = width;
  board.height = height;
  board.jumpHeight = height * 0.5;

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

  // load matous
  matousImg = new Image();
  matousImg.src = matousColorPath;

  // draw ground
  matousImg.onload = () => {
    context.drawImage(
      matousImg,
      matous.x,
      matous.y,
      matous.width,
      matous.height
    );
  };

  // load pigon images
  piegonImg = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
  ];
  piegonImg[0].src = piegonImgPaths[0];
  piegonImg[1].src = piegonImgPaths[1];
  piegonImg[2].src = piegonImgPaths[2];
  piegonImg[3].src = piegonImgPaths[3];
  piegonImg[4].src = piegonImgPaths[4];
  piegonImg[5].src = piegonImgPaths[5];
  piegonImg[6].src = piegonImgPaths[6];
  piegonImg[7].src = piegonImgPaths[7];
  piegonImg[8].src = piegonImgPaths[8];
  piegonImg[9].src = piegonImgPaths[9];
  piegonImg[10].src = piegonImgPaths[10];

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
  document.addEventListener("keydown", movePiegon);
  document.addEventListener("touchstart", movePiegon);
};

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  context.drawImage(groundImg, ground.x, ground.y, ground.width, ground.height);
  context.drawImage(matousImg, matous.x, matous.y, matous.width, matous.height);

  // process jumping
  if (piegon.isPiegonJumping) {
    if (piegon.isPiegonJumpingTop) {
      if (piegon.y > board.jumpHeight) piegon.y -= 1 * 0.008 * piegon.y;
      else piegon.isPiegonJumpingTop = false;
    } else {
      if (piegon.y < piegonY) piegon.y += 1 * 0.008 * piegon.y;
      else {
        piegon.isPiegonJumping = false;
        piegon.animationNo = 0;
        piegon.y = piegonY;
      }
    }
  }

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
  if (!piegon.isPiegonJumping)
    piegon.animationNo == 3
      ? (piegon.animationNo = 0)
      : (piegon.animationNo = piegon.animationNo + 1);
  else
    piegon.animationNo == 10
      ? (piegon.animationNo = 4)
      : (piegon.animationNo = piegon.animationNo + 1);
}

function moveGround() {
  if (ground.x == -102) ground.x = 0;
  else ground.x -= 1;
}

function movePiegon(e) {
  if (gameOver) return;
  if (
    e.code == "Space" ||
    e.code == "ArrowUp" ||
    (e.type == "touchstart" && e.srcElement.id == "game")
  ) {
    piegon.isPiegonJumping = true;
    if (piegon.isPiegonJumpingTop) piegon.isPiegonJumpingTop = false;
    else piegon.isPiegonJumpingTop = true;
  }
}
