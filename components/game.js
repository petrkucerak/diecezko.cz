import Script from "next/script";

export default function Game() {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <canvas id="game" width={300} height={150}></canvas>
      <Script
        id="game-script"
        src="/lib/game.js"
        strategy="beforeInteractive"
        onLoad={console.log("Ready")}
      />
    </div>
  );
}
