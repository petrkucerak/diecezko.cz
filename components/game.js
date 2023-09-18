"use client";
import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    // game bord
    let board = document.getElementById("game");
    board.width = Math.min(window.innerWidth * 0.9, 1800);
    board.height = Math.min(window.innerHeight - 64, 600);
    board.jumpHeight = board.height * 0.2;
    board.context = board.getContext("2d");

    let game = { isGameOver: false, scrore: 0 };

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
      y: board.height - ground.height - 200 * 0.6 + 4,
      isVisible: false,
    };
    duch.image.src = "/assets/images/game/duch.png";

    // matous
    let matous = {
      image: new Image(),
      width: 300 * 0.6,
      height: 222 * 0.6,
      x: 0,
      y: board.height - ground.height - 222 * 0.6 + 4,
      isVisible: false,
    };
    matous.image.src = "/assets/images/game/matous.png";

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
    setInterval(createObstacle, 2000);
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
      requestAnimationFrame(update);
      board.context.clearRect(0, 0, board.width, board.height);

      // process jumping
      if (piegon.isPiegonJumping) {
        piegon.lastClick < 30
          ? (piegon.lastClick += 1)
          : (piegon.lastClick = 30);
        if (piegon.isPiegonJumpingTop) {
          if (piegon.y > board.jumpHeight)
            piegon.y -= 1 * 0.06 * piegon.lastClick;
          else piegon.isPiegonJumpingTop = false;
        } else {
          if (piegon.y < piegon.startY) piegon.y += 1 * 0.1 * piegon.lastClick;
          else {
            piegon.isPiegonJumping = false;
            piegon.animationNo = 0;
            piegon.y = piegon.startY;
          }
        }
      }

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

      if (duch.isVisible) duch.x -= 1;
      if (matous.isVisible) matous.x -= 1;
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
    function createObstacle() {
      const rnd = Math.random();
      if (rnd < 0.2 && !duch.isVisible) {
        duch.isVisible = true;
        duch.x = board.width;
      } else if (rnd < 0.5 && !matous.isVisible) {
        matous.isVisible = true;
        matous.x = board.width;
      }
    }
  });

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <canvas id="game" width={300} height={150} className="bg-white"></canvas>
    </div>
  );
}
