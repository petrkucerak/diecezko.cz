import Script from "next/script";

export default function Game() {
  return (
    <div>
      <canvas id="game" className="bg-green-500"></canvas>
      <Script src="/lib/game.js" />
    </div>
  );
}
