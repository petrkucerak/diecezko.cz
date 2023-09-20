import Header from "../../components/header";
import Footer from "../../components/footer";
import Game from "../../components/game";
import { getScore } from "../../lib/score";
export default async function EvzenovaCesta() {
  const score = getScore();
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <Game score={score} />
      <Footer />
    </main>
  );
}
