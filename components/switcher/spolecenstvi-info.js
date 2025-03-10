import Container from "../layouts/container";
import CardFeed from "../layouts/card-feed";
import Link from "next/link";
import Button from "../layouts/button";
import IconCustomVeka from "../images/veka";
import ContainerH2 from "../layouts/container-h2";
import { IconArrowBarToDown, IconChessBishop, IconMap, IconSailboat2, IconTower } from "@tabler/icons";
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
      <FAQ />
      <ContainerH2 className={`w-full text-center`}>
        Tipy na další obsah
      </ContainerH2>
      <CardFeed>
        <Link
          href="https://cestapustem.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconCustomAdventniCesta className={`inline h-6 mr-2`} />
            Cesta půstem
          </Button>
        </Link>
        <Link
          href="https://www.bihk.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconChessBishop className={`inline h-6 mr-2`} />
            Biskupství Královehradecké
          </Button>
        </Link>
        <Link
          href="https://www.svetovednymladeze.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconSailboat2 className={`inline h-6 mr-2`} />
            Jubileum mládeže
          </Button>
        </Link>
      </CardFeed>
      <ContainerH2 className={`w-full text-center`}>Propagace</ContainerH2>
      <CardFeed>
        <Link
          href="/assets/files/DSM25-plakát.pdf"
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
