// pixle art generato https://giventofly.github.io/pixelit/#tryit

export function game() {
  // game bord
  let board = document.getElementById("game");
  board.width = Math.min(window.innerWidth * 0.9, 800);
  board.height = Math.min(window.innerHeight, 600);
  board.jumpHeight = board.height * 0.1;
  board.context = board.getContext("2d");

  const gameScore = document.getElementById("gameScore");

  let game = { isGameOver: false, time: 0, speed: 1 };

  // background
  board.context.fillStyle = "#588DBE";
  board.context.fillRect(0, 0, board.width, board.height);
  // space
  drawSpace();

  let bg2 = {
    image: new Image(),
    width: 1200 * 2,
    height: 93 * 2,
    x: 0,
    y: board.height - 93 * 2 - 50,
  };
  bg2.image.src = "/assets/images/game/bg_2.png";
  bg2.image.onload = () => {
    board.context.drawImage(bg2.image, bg2.x, bg2.y, bg2.width, bg2.height);
  };
  let bg3 = {
    image: new Image(),
    width: 1200 * 2,
    height: 65 * 2,
    x: 0,
    y: board.height - 65 * 2,
  };
  bg3.image.src = "/assets/images/game/bg_3.png";
  bg3.image.onload = () => {
    board.context.drawImage(bg3.image, bg3.x, bg3.y, bg3.width, bg3.height);
  };
  let bg4 = {
    image: new Image(),
    width: 1200 * 2,
    height: 43 * 2,
    x: 0,
    y: board.height - 43 * 2,
  };
  bg4.image.src = "/assets/images/game/bg_4.png";
  bg4.image.onload = () => {
    board.context.drawImage(bg4.image, bg4.x, bg4.y, bg4.width, bg4.height);
  };
  let space = {
    image: new Image(),
    width: 2560 * 1.5,
    height: 66 * 1.5,
    x: 0,
    y: board.height * 0.1,
  };
  space.image.src = "/assets/images/game/space.png";
  space.image.onload = () => {
    board.context.drawImage(
      space.image,
      space.x,
      space.y,
      space.width,
      space.height
    );
  };

  // render elements
  // ground
  let ground = {
    image: new Image(),
    width: 1075 * 2,
    height: 6 * 2,
    x: 0,
    y: board.height - 6 * 2,
  };
  ground.image.src = "/assets/images/game/ground.png";
  ground.image.onload = () => {
    board.context.drawImage(
      ground.image,
      ground.x,
      ground.y,
      ground.width,
      ground.height
    );
  };

  // duch
  let duch = {
    image: new Image(),
    width: 138 * 0.6,
    height: 200 * 0.6,
    x: 300,
    y: board.height - ground.height - 200 * 0.6 + 8,
    isVisible: false,
  };
  duch.image.src = "/assets/images/game/duch.png";

  // matous
  let matous = {
    image: new Image(),
    width: 300 * 0.7,
    height: 222 * 0.7,
    x: 0,
    y: board.height - ground.height - 222 * 0.7 + 4,
    isVisible: false,
  };
  matous.image.src = "/assets/images/game/matous.png";

  // barbora
  let barbora = {
    image: new Image(),
    width: 300 * 0.5,
    height: 263 * 0.5,
    x: 0,
    y: board.height - ground.height - 263 * 0.5 + 10,
    isVisible: false,
  };
  barbora.image.src = "/assets/images/game/barbora.png";

  // litomysl
  let litomysl = {
    image: new Image(),
    width: 300 * 0.6,
    height: 197 * 0.6,
    x: 0,
    y: board.height - ground.height - 197 * 0.6 + 12,
    isVisible: false,
  };
  litomysl.image.src = "/assets/images/game/litomysl.png";

  // opocno
  let opocno = {
    image: new Image(),
    width: 300 * 0.6,
    height: 152 * 0.6,
    x: 0,
    y: board.height - ground.height - 152 * 0.6 + 10,
    isVisible: false,
  };
  opocno.image.src = "/assets/images/game/opocno.png";

  // kunka
  let kunka = {
    image: new Image(),
    width: 600 * 0.6,
    height: 189 * 0.6,
    x: 0,
    y: board.height - ground.height - 189 * 0.6 + 10,
    isVisible: false,
  };
  kunka.image.src = "/assets/images/game/kunka.png";

  // destna
  let destna = {
    image: new Image(),
    width: 162 * 0.6,
    height: 300 * 0.6,
    x: 0,
    y: board.height - ground.height - 300 * 0.6 + 10,
    isVisible: false,
  };
  destna.image.src = "/assets/images/game/destna.png";

  // kralovstvi
  let kralovstvi = {
    image: new Image(),
    width: 300 * 0.5,
    height: 172 * 0.5,
    x: 0,
    y: board.height - ground.height - 172 * 0.5 + 10,
    isVisible: false,
  };
  kralovstvi.image.src = "/assets/images/game/kralovstvi.png";

  // krematorium
  let krematorium = {
    image: new Image(),
    width: 300 * 0.4,
    height: 254 * 0.4,
    x: 0,
    y: board.height - ground.height - 254 * 0.4 + 8,
    isVisible: false,
  };
  krematorium.image.src = "/assets/images/game/krematorium.png";

  // vesmir
  let vesmir = {
    image: new Image(),
    width: 300 * 0.5,
    height: 161 * 0.5,
    x: 0,
    y: board.height - ground.height - 161 * 0.5 + 3,
    isVisible: false,
  };
  vesmir.image.src = "/assets/images/game/vesmir.png";

  // airship1
  let airship1 = {
    image: new Image(),
    width: 287 * 0.4,
    height: 158 * 0.4,
    isFlying: true,
    x: 0,
    y: board.height / 3 + board.height * 0.15,
    isVisible: false,
  };
  airship1.image.src = "/assets/images/game/airship_1.png";

  // airship2
  let airship2 = {
    image: new Image(),
    width: 262 * 0.4,
    height: 125 * 0.4,
    isFlying: true,
    x: 0,
    y: board.height / 3 + board.height * 0.2,
    isVisible: false,
  };
  airship2.image.src = "/assets/images/game/airship_2.png";

  // airship3
  let airship3 = {
    image: new Image(),
    width: 262 * 0.4,
    height: 146 * 0.4,
    isFlying: true,
    x: 0,
    y: board.height / 3 + board.height * 0.1,
    isVisible: false,
  };
  airship3.image.src = "/assets/images/game/airship_3.png";

  // rocket
  let rocket = {
    image: new Image(),
    width: 500 * 0.2,
    height: 269 * 0.2,
    isFlying: true,
    x: 0,
    y: board.height / 6,
    isVisible: false,
  };
  rocket.image.src = "/assets/images/game/rocket.png";

  let cake = {
    image: new Image(),
    width: 15 * 1.5,
    height: 15 * 1.5,
    x: 0,
    y: board.height - ground.height - 15 * 1.5,
    isVisible: false,
  };
  cake.image.src = "/assets/images/game/cake.png";
  let donut = {
    image: new Image(),
    width: 16 * 1.5,
    height: 13 * 1.5,
    x: 0,
    y: board.height - ground.height - 13 * 1.5,
    isVisible: false,
  };
  donut.image.src = "/assets/images/game/donut.png";
  let meat = {
    image: new Image(),
    width: 15 * 1.5,
    height: 14 * 1.5,
    x: 0,
    y: board.height - ground.height - 14 * 1.5,
    isVisible: false,
  };
  meat.image.src = "/assets/images/game/meat.png";
  let tofu = {
    image: new Image(),
    width: 12 * 1.5,
    height: 11 * 1.5,
    x: 0,
    y: board.height - ground.height - 11 * 1.5,
    isVisible: false,
  };
  tofu.image.src = "/assets/images/game/tofu.png";
  let burger = {
    image: new Image(),
    width: 14 * 1.8,
    height: 11 * 1.8,
    x: 0,
    y: board.height - ground.height - 11 * 1.8,
    isVisible: false,
  };
  burger.image.src = "/assets/images/game/burger.png";
  let pizza = {
    image: new Image(),
    width: 11 * 1.5,
    height: 12 * 1.5,
    x: 0,
    y: board.height - ground.height - 12 * 1.5,
    isVisible: false,
  };
  pizza.image.src = "/assets/images/game/pizza.png";
  let icecream = {
    image: new Image(),
    width: 14 * 1.5,
    height: 15 * 1.5,
    x: 0,
    y: board.height - ground.height - 15 * 1.5,
    isVisible: false,
  };
  icecream.image.src = "/assets/images/game/icecream.png";
  let stejk = {
    image: new Image(),
    width: 16 * 1.5,
    height: 13 * 1.5,
    x: 0,
    y: board.height - ground.height - 13 * 1.5,
    isVisible: false,
  };
  stejk.image.src = "/assets/images/game/stejk.png";

  let muffin = {
    image: new Image(),
    width: 14 * 1.5,
    height: 14 * 1.5,
    x: 0,
    y: board.height - ground.height - 14 * 1.5,
    isVisible: false,
  };
  muffin.image.src = "/assets/images/game/muffin.png";

  let coffe = {
    image: new Image(),
    width: 13 * 1.5,
    height: 15 * 1.5,
    x: 0,
    y: board.height - ground.height - 15 * 1.5,
    isVisible: false,
  };
  coffe.image.src = "/assets/images/game/coffe.png";
  let star = {
    image: new Image(),
    width: 20 * 1.5,
    height: 22 * 1.5,
    x: 0,
    y: board.height / 6,
    isVisible: false,
  };
  star.image.src = "/assets/images/game/star.png";

  // piegon
  let piegon = {
    startX: 20,
    startY: board.height - 50 - 11, // board.height - piegon.height - ground.height
    x: 20,
    y: board.height - 50 - 11, // board.height - piegon.height - ground.height
    width: 2 * 25,
    height: 2 * 25,
    animationNo: 0,
    isPiegonJumpingTop: false,
    isPiegonJumping: false,
    isPiegonEating: false,
    lastClick: 0,
    imagePath: [
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
      "/assets/images/game/pigeon_eat_01.png",
      "/assets/images/game/pigeon_eat_02.png",
      "/assets/images/game/pigeon_eat_03.png",
      "/assets/images/game/pigeon_eat_04.png",
    ],
    image: [
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
      new Image(),
      new Image(),
      new Image(),
      new Image(),
    ],
  };
  for (let i = 0; i < piegon.imagePath.length; i += 1)
    piegon.image[i].src = piegon.imagePath[i];
  piegon.image[0].onload = () => {
    board.context.drawImage(
      piegon.image[0],
      piegon.x,
      piegon.y,
      piegon.width,
      piegon.height
    );
  };

  // updates
  requestAnimationFrame(update);

  // handles
  setInterval(createObstacleDown, 5000 + Math.random() * 5000);
  setInterval(createObstacleMiddle, 7000 + Math.random() * 5000);
  setInterval(createObstacleTop, 10000 + Math.random() * 10000);
  spawnFood();

  setInterval(piegonMove, 50); // 0.1s
  setInterval(moveGround, 10);

  document.addEventListener("keydown", movePiegon);
  document.addEventListener("touchstart", movePiegon);
  window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

  function update() {
    if (game.isGameOver) return;
    gameSpeedUp();
    board.context.clearRect(0, 0, board.width, board.height);

    //background
    board.context.fillStyle = "#588DBE";
    board.context.fillRect(0, 0, board.width, board.height);
    // space
    drawSpace();
    board.context.drawImage(bg2.image, bg2.x, bg2.y, bg2.width, bg2.height);
    board.context.drawImage(bg3.image, bg3.x, bg3.y, bg3.width, bg3.height);
    board.context.drawImage(bg4.image, bg4.x, bg4.y, bg4.width, bg4.height);
    board.context.drawImage(
      space.image,
      space.x,
      space.y,
      space.width,
      space.height
    );

    // process jumping
    if (piegon.isPiegonJumping) {
      piegon.lastClick < 30 ? (piegon.lastClick += 1) : (piegon.lastClick = 30);
      if (piegon.isPiegonJumpingTop) {
        if (piegon.y > board.jumpHeight)
          piegon.y -= 1 * 0.06 * piegon.lastClick * game.speed;
        else piegon.isPiegonJumpingTop = false;
      } else {
        if (piegon.y < piegon.startY)
          piegon.y += 1 * 0.1 * piegon.lastClick * game.speed;
        else {
          piegon.isPiegonJumping = false;
          piegon.animationNo = 0;
          piegon.y = piegon.startY;
        }
      }
    }

    // DRAW UPDATES
    {
      // foods layer
      if (cake.isVisible) {
        board.context.drawImage(
          cake.image,
          cake.x,
          cake.y,
          cake.width,
          cake.height
        );
        cake.x + cake.width < 0 ? (cake.isVisible = false) : null;
      }
      if (donut.isVisible) {
        board.context.drawImage(
          donut.image,
          donut.x,
          donut.y,
          donut.width,
          donut.height
        );
        donut.x + donut.width < 0 ? (donut.isVisible = false) : null;
      }
      if (meat.isVisible) {
        board.context.drawImage(
          meat.image,
          meat.x,
          meat.y,
          meat.width,
          meat.height
        );
        meat.x + meat.width < 0 ? (meat.isVisible = false) : null;
      }
      if (tofu.isVisible) {
        board.context.drawImage(
          tofu.image,
          tofu.x,
          tofu.y,
          tofu.width,
          tofu.height
        );
        tofu.x + tofu.width < 0 ? (tofu.isVisible = false) : null;
      }
      if (burger.isVisible) {
        board.context.drawImage(
          burger.image,
          burger.x,
          burger.y,
          burger.width,
          burger.height
        );
        burger.x + burger.width < 0 ? (burger.isVisible = false) : null;
      }
      if (pizza.isVisible) {
        board.context.drawImage(
          pizza.image,
          pizza.x,
          pizza.y,
          pizza.width,
          pizza.height
        );
        pizza.x + pizza.width < 0 ? (pizza.isVisible = false) : null;
      }
      if (icecream.isVisible) {
        board.context.drawImage(
          icecream.image,
          icecream.x,
          icecream.y,
          icecream.width,
          icecream.height
        );
        icecream.x + icecream.width < 0 ? (icecream.isVisible = false) : null;
      }
      if (stejk.isVisible) {
        board.context.drawImage(
          stejk.image,
          stejk.x,
          stejk.y,
          stejk.width,
          stejk.height
        );
        stejk.x + stejk.width < 0 ? (stejk.isVisible = false) : null;
      }
      if (muffin.isVisible) {
        board.context.drawImage(
          muffin.image,
          muffin.x,
          muffin.y,
          muffin.width,
          muffin.height
        );
        muffin.x + muffin.width < 0 ? (muffin.isVisible = false) : null;
      }
      if (coffe.isVisible) {
        board.context.drawImage(
          coffe.image,
          coffe.x,
          coffe.y,
          coffe.width,
          coffe.height
        );
        coffe.x + coffe.width < 0 ? (coffe.isVisible = false) : null;
      }

      if (star.isVisible) {
        board.context.drawImage(
          star.image,
          star.x,
          star.y,
          star.width,
          star.height
        );
        star.x + star.width < 0 ? (star.isVisible = false) : null;
      }
      // buildings layer
      if (duch.isVisible) {
        board.context.drawImage(
          duch.image,
          duch.x,
          duch.y,
          duch.width,
          duch.height
        );
        duch.x + duch.width < 0 ? (duch.isVisible = false) : null;
      }

      if (matous.isVisible) {
        board.context.drawImage(
          matous.image,
          matous.x,
          matous.y,
          matous.width,
          matous.height
        );
        matous.x + matous.width < 0 ? (matous.isVisible = false) : null;
      }
      if (litomysl.isVisible) {
        board.context.drawImage(
          litomysl.image,
          litomysl.x,
          litomysl.y,
          litomysl.width,
          litomysl.height
        );
        litomysl.x + litomysl.width < 0 ? (litomysl.isVisible = false) : null;
      }
      if (destna.isVisible) {
        board.context.drawImage(
          destna.image,
          destna.x,
          destna.y,
          destna.width,
          destna.height
        );
        destna.x + destna.width < 0 ? (destna.isVisible = false) : null;
      }
      if (kralovstvi.isVisible) {
        board.context.drawImage(
          kralovstvi.image,
          kralovstvi.x,
          kralovstvi.y,
          kralovstvi.width,
          kralovstvi.height
        );
        kralovstvi.x + kralovstvi.width < 0
          ? (kralovstvi.isVisible = false)
          : null;
      }
      if (krematorium.isVisible) {
        board.context.drawImage(
          krematorium.image,
          krematorium.x,
          krematorium.y,
          krematorium.width,
          krematorium.height
        );
        krematorium.x + krematorium.width < 0
          ? (krematorium.isVisible = false)
          : null;
      }
      if (barbora.isVisible) {
        board.context.drawImage(
          barbora.image,
          barbora.x,
          barbora.y,
          barbora.width,
          barbora.height
        );
        barbora.x + barbora.width < 0 ? (barbora.isVisible = false) : null;
      }
      if (opocno.isVisible) {
        board.context.drawImage(
          opocno.image,
          opocno.x,
          opocno.y,
          opocno.width,
          opocno.height
        );
        opocno.x + opocno.width < 0 ? (opocno.isVisible = false) : null;
      }
      if (vesmir.isVisible) {
        board.context.drawImage(
          vesmir.image,
          vesmir.x,
          vesmir.y,
          vesmir.width,
          vesmir.height
        );
        vesmir.x + vesmir.width < 0 ? (vesmir.isVisible = false) : null;
      }
      if (kunka.isVisible) {
        board.context.drawImage(
          kunka.image,
          kunka.x,
          kunka.y,
          kunka.width,
          kunka.height
        );
        kunka.x + kunka.width < 0 ? (kunka.isVisible = false) : null;
      }

      if (airship1.isVisible) {
        board.context.drawImage(
          airship1.image,
          airship1.x,
          airship1.y,
          airship1.width,
          airship1.height
        );
        airship1.x + airship1.width < 0 ? (airship1.isVisible = false) : null;
      }
      if (airship2.isVisible) {
        board.context.drawImage(
          airship2.image,
          airship2.x,
          airship2.y,
          airship2.width,
          airship2.height
        );
        airship2.x + airship2.width < 0 ? (airship2.isVisible = false) : null;
      }
      if (airship3.isVisible) {
        board.context.drawImage(
          airship3.image,
          airship3.x,
          airship3.y,
          airship3.width,
          airship3.height
        );
        airship3.x + airship3.width < 0 ? (airship3.isVisible = false) : null;
      }
      if (rocket.isVisible) {
        board.context.drawImage(
          rocket.image,
          rocket.x,
          rocket.y,
          rocket.width,
          rocket.height
        );
        rocket.x + rocket.width < 0 ? (rocket.isVisible = false) : null;
      }
      board.context.drawImage(
        ground.image,
        ground.x,
        ground.y,
        ground.width,
        ground.height
      );
      board.context.drawImage(
        piegon.image[piegon.animationNo],
        piegon.x,
        piegon.y,
        piegon.width,
        piegon.height
      );
    }

    requestAnimationFrame(update);
  }

  function piegonMove() {
    if (game.isGameOver) return;
    if (piegon.isPiegonEating) {
      piegon.animationNo += 1;
      if (piegon.animationNo == 14) {
        piegon.animationNo = 0;
        piegon.isPiegonEating = false;
      }
    } else if (piegon.isPiegonJumping)
      piegon.animationNo == 10
        ? (piegon.animationNo = 4)
        : (piegon.animationNo = piegon.animationNo + 1);
    else
      piegon.animationNo == 3
        ? (piegon.animationNo = 0)
        : (piegon.animationNo = piegon.animationNo + 1);
  }

  function moveGround() {
    if (game.isGameOver) return;
    if (ground.x <= -102) ground.x = 0;
    else ground.x -= 1 * game.speed;

    if (space.x <= -(5 * 256)) space.x = 0;
    else space.x -= 0.0625 * game.speed;

    if (bg2.x <= -640) bg2.x = 0;
    else bg2.x -= 0.125 * game.speed;

    if (bg3.x <= -320) bg3.x = 0;
    else bg3.x -= 0.25 * game.speed;

    if (bg4.x <= -160) bg4.x = 0;
    else bg4.x -= 0.5 * game.speed;

    // Handle obstacle position
    {
      if (duch.isVisible) {
        duch.x -= 1 * game.speed;
        colisionDetect(duch);
      }
      if (matous.isVisible) {
        matous.x -= 1 * game.speed;
        colisionDetect(matous);
      }
      if (opocno.isVisible) {
        opocno.x -= 1 * game.speed;
        colisionDetect(opocno);
      }
      if (kunka.isVisible) {
        kunka.x -= 1 * game.speed;
        colisionDetect(kunka);
      }
      if (litomysl.isVisible) {
        litomysl.x -= 1 * game.speed;
        colisionDetect(litomysl);
      }
      if (barbora.isVisible) {
        barbora.x -= 1 * game.speed;
        colisionDetect(barbora);
      }
      if (destna.isVisible) {
        destna.x -= 1 * game.speed;
        colisionDetect(destna);
      }
      if (kralovstvi.isVisible) {
        kralovstvi.x -= 1 * game.speed;
        colisionDetect(kralovstvi);
      }
      if (krematorium.isVisible) {
        krematorium.x -= 1 * game.speed;
        colisionDetect(krematorium);
      }
      if (vesmir.isVisible) {
        vesmir.x -= 1 * game.speed;
        colisionDetect(vesmir);
      }
      if (airship1.isVisible) {
        airship1.x -= 1.5 * game.speed;
        colisionDetect(airship1);
      }
      if (airship2.isVisible) {
        airship2.x -= 1.5 * game.speed;
        colisionDetect(airship2);
      }
      if (airship3.isVisible) {
        airship3.x -= 1.5 * game.speed;
        colisionDetect(airship3);
      }
      if (rocket.isVisible) {
        rocket.x -= 3 * game.speed;
        colisionDetect(rocket);
      }
    }

    if (cake.isVisible) {
      cake.x -= 1;
      if (
        cake.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        cake.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 1 * game.speed;
      }
    }
    if (donut.isVisible) {
      donut.x -= 1;
      if (
        donut.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        donut.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 2 * game.speed;
      }
    }
    if (meat.isVisible) {
      meat.x -= 1;
      if (
        meat.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        meat.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 2 * game.speed;
      }
    }
    if (tofu.isVisible) {
      tofu.x -= 1;
      if (
        tofu.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        tofu.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 1 * game.speed;
      }
    }
    if (burger.isVisible) {
      burger.x -= 1;
      if (
        burger.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        burger.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 3 * game.speed;
      }
    }
    if (pizza.isVisible) {
      pizza.x -= 1;
      if (
        pizza.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        pizza.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 2 * game.speed;
      }
    }
    if (icecream.isVisible) {
      icecream.x -= 1;
      if (
        icecream.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        icecream.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 1 * game.speed;
      }
    }
    if (muffin.isVisible) {
      muffin.x -= 1;
      if (
        muffin.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        muffin.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 2 * game.speed;
      }
    }
    if (coffe.isVisible) {
      coffe.x -= 1;
      if (
        coffe.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        coffe.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 1 * game.speed;
      }
    }
    if (stejk.isVisible) {
      stejk.x -= 1;
      if (
        stejk.x == piegon.x + piegon.width &&
        !piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        piegon.isPiegonEating = true;
        stejk.isVisible = false;
        piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 3 * game.speed;
      }
    }
    if (star.isVisible) {
      star.x -= 1;
      if (
        star.x == piegon.x + piegon.width &&
        piegon.isPiegonJumping &&
        !piegon.isPiegonEating
      ) {
        // star is not on the ground
        // piegon.isPiegonEating = true;
        star.isVisible = false;
        // piegon.animationNo = 11;
        gameScore.innerText = parseInt(gameScore.innerText) + 15 * game.speed;
      }
    }
  }

  function colisionDetect(obs) {
    let a, b, m, n;
    a = obs.width / 2;
    obs.isFlying == true ? (b = obs.height / 2) : (b = obs.height);
    m = obs.x + a;
    n = obs.y + b;

    function isColision(x, y) {
      if (((x - m) * (x - m)) / (a * a) + ((y - n) * (y - n)) / (b * b) <= 1)
        return true;
      else false;
    }

    if (
      isColision(piegon.x + piegon.width / 2, piegon.y + piegon.height / 2) || // check center of piegon
      isColision(piegon.x + piegon.width - 5, piegon.y + 10) || // check head of piegon
      isColision(piegon.x + piegon.width / 4, piegon.y + piegon.height - 10) || // check foods of piegon
      isColision(piegon.x, piegon.y) // check wigh of piegon
    ) {
      game.isGameOver = true;
      document.getElementById("fail-banner").classList.remove("hidden");
    }
  }

  function movePiegon(e) {
    if (game.isGameOver) return;
    if (
      e.code == "Space" ||
      (e.type == "touchstart" && e.srcElement.id == "game")
    ) {
      piegon.isPiegonJumping = true;
      piegon.lastClick = 0;
      if (piegon.isPiegonJumpingTop) piegon.isPiegonJumpingTop = false;
      else piegon.isPiegonJumpingTop = true;
    }
  }
  function createObstacleTop() {
    if (game.isGameOver) return;
    const rnd = Math.random();
    if (rnd < 1 && !rocket.isVisible) {
      rocket.isVisible = true;
      rocket.x = board.width;
    }
  }
  function createObstacleMiddle() {
    if (game.isGameOver) return;
    const rnd = Math.random();
    if (rnd < 0.33333 && !airship1.isVisible) {
      airship1.isVisible = true;
      airship1.x = board.width;
    } else if (rnd < 0.6667 && !airship2.isVisible) {
      airship2.isVisible = true;
      airship2.x = board.width;
    } else if (rnd < 1 && !airship3.isVisible) {
      airship3.isVisible = true;
      airship3.x = board.width;
    }
  }
  function createObstacleDown() {
    if (game.isGameOver) return;

    const rnd = Math.random();
    if (rnd < 0.1 && !duch.isVisible) {
      duch.isVisible = true;
      duch.x = board.width;
    } else if (rnd < 0.2 && !matous.isVisible) {
      matous.isVisible = true;
      matous.x = board.width;
    } else if (rnd < 0.3 && !opocno.isVisible) {
      opocno.isVisible = true;
      opocno.x = board.width;
    } else if (rnd < 0.4 && !kunka.isVisible) {
      kunka.isVisible = true;
      kunka.x = board.width;
    } else if (rnd < 0.5 && !litomysl.isVisible) {
      litomysl.isVisible = true;
      litomysl.x = board.width;
    } else if (rnd < 0.6 && !barbora.isVisible) {
      barbora.isVisible = true;
      barbora.x = board.width;
    } else if (rnd < 0.7 && !destna.isVisible) {
      destna.isVisible = true;
      destna.x = board.width;
    } else if (rnd < 0.8 && !kralovstvi.isVisible) {
      kralovstvi.isVisible = true;
      kralovstvi.x = board.width;
    } else if (rnd < 0.9 && !krematorium.isVisible) {
      krematorium.isVisible = true;
      krematorium.x = board.width;
    } else if (rnd < 1 && !vesmir.isVisible) {
      vesmir.isVisible = true;
      vesmir.x = board.width;
    }
  }

  function spawnFood() {
    const interval = 10000;
    if (game.isGameOver) return;
    setTimeout(() => {
      setInterval(() => {
        if (!cake.isVisible) {
          cake.isVisible = true;
          cake.x = board.width;
        }
      }, interval);
    }, 0 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!donut.isVisible) {
          donut.isVisible = true;
          donut.x = board.width;
        }
      }, interval);
    }, 1000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!meat.isVisible) {
          meat.isVisible = true;
          meat.x = board.width;
        }
      }, interval);
    }, 2000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!tofu.isVisible) {
          tofu.isVisible = true;
          tofu.x = board.width;
        }
      }, interval);
    }, 3000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!burger.isVisible) {
          burger.isVisible = true;
          burger.x = board.width;
        }
      }, interval);
    }, 4000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!pizza.isVisible) {
          pizza.isVisible = true;
          pizza.x = board.width;
        }
      }, interval);
    }, 5000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!icecream.isVisible) {
          icecream.isVisible = true;
          icecream.x = board.width;
        }
      }, interval);
    }, 6000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!stejk.isVisible) {
          stejk.isVisible = true;
          stejk.x = board.width;
        }
      }, interval);
    }, 7000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!muffin.isVisible) {
          muffin.isVisible = true;
          muffin.x = board.width;
        }
      }, interval);
    }, 8000 + Math.random() * 100);
    setTimeout(() => {
      setInterval(() => {
        if (!coffe.isVisible) {
          coffe.isVisible = true;
          coffe.x = board.width;
        }
      }, interval);
    }, 9000 + Math.random() * 100);

    // star
    setTimeout(() => {
      setInterval(() => {
        if (!star.isVisible) {
          star.isVisible = true;
          star.x = board.width;
        }
      }, 3 * interval + Math.random() * 500);
    }, Math.random() * 1000);
  }

  function drawSpace() {
    if (game.isGameOver) return;
    // space
    const spaceGradient = board.context.createLinearGradient(
      0,
      board.height / 3,
      0,
      board.height / 5
    );
    spaceGradient.addColorStop(0, "#00000000");
    spaceGradient.addColorStop(1, "#000");
    board.context.fillStyle = spaceGradient;
    board.context.fillRect(0, 0, board.width, board.height / 2);
  }

  function gameSpeedUp() {
    parseInt(gameScore.innerText) <= 50 ? (game.speed = 1) : null;
    parseInt(gameScore.innerText) >= 50 && parseInt(gameScore.innerText) < 100
      ? (game.speed = 1.5)
      : null;
    parseInt(gameScore.innerText) >= 100 && parseInt(gameScore.innerText) < 200
      ? (game.speed = 2)
      : null;
    parseInt(gameScore.innerText) >= 200 && parseInt(gameScore.innerText) < 500
      ? (game.speed = 2.5)
      : null;
    parseInt(gameScore.innerText) >= 500 && parseInt(gameScore.innerText) < 1000
      ? (game.speed = 3)
      : null;
    parseInt(gameScore.innerText) >= 1000 ? (game.speed = 4) : null;
  }
}
