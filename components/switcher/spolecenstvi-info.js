import Container from "../layouts/container";
import CardFeed from "../layouts/card-feed";
import Link from "next/link";
import Button from "../layouts/button";
import IconCustomVeka from "../images/veka";
import ContainerH2 from "../layouts/container-h2";
import {
  IconArrowBarToDown,
  IconChefHat,
  IconHeart,
  IconMusic,
  IconPuzzle,
  IconTournament,
  IconWall,
} from "@tabler/icons";
import IconCustomDCM from "../images/dcm-hk";
import IconCustomVesmir from "../images/vesmir";
import IconCustomSalas from "../images/salas";
import IconCustomAdventniCesta from "../images/adventni-cesta";
import FAQ from "../faq";
import IconCustomTmm from "../images/tmm";
import IconCustomDenikSracu from "../images/deniksracu";

export default function SpolecenstviInfo({ id, className }) {
  return (
    <Container className={className} id={id}>
      {/* <FAQ /> */}
      <p className="text-xl mt-4">Podrobné informace budou doplněny...</p>
      {/* <ContainerH2 className={`w-full text-center`}>
        Tipy na další obsah
      </ContainerH2>
      <CardFeed>
        <Link
          href="https://adventnicesta.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconCustomAdventniCesta className={`inline h-6 mr-2`} />
            Adventní cesta
          </Button>
        </Link>
        <Link href="/tyden-modliteb-za-mladez" className="">
          <Button>
            <IconCustomTmm className={`inline h-6 mr-2`} />
            Týden modliteb za mládež
          </Button>
        </Link>
        <Link
          href="https://www.facebook.com/events/s/florbalovy-turnaj-v-kralovehra/1357115585198034/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconTournament className={`inline h-6 mr-2`} stroke={1.5} />
            Florbalový turnaj
          </Button>
        </Link>
      </CardFeed> */}
      <ContainerH2 className={`w-full text-center`}>Propagace</ContainerH2>
      <CardFeed>
        <Link
          href="/assets/files/DSM24-plakat.pdf"
          rel=""
          target="_blank"
          className=""
        >
          <Button>
            <IconArrowBarToDown className={`inline h-6 mr-2`} stroke={1.8} />
            Plakátek
          </Button>
        </Link>
      </CardFeed>
    </Container>
  );
}
