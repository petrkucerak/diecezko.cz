import Script from "next/script";

export default function Game() {
  return (
    <div>
      <canvas id="game"></canvas>
      <Script id="game-script" src="/lib/game.js" />
    </div>
  );
}
