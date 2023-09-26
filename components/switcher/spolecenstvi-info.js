import Container from "../layouts/container";
import ContainerTitle from "../layouts/container-title";
import CardFeed from "../layouts/card-feed";
import Link from "next/link";
import Button from "../layouts/button";
import IconCustomVeka from "../images/veka";
import ContainerH2 from "../layouts/container-h2";
import { IconChefHat, IconMusic, IconPuzzle } from "@tabler/icons";
import IconCustomDCM from "../images/dcm-hk";
import IconCustomVesmir from "../images/vesmir";
import IconCustomSalas from "../images/salas";
import IconCustomAdventniCesta from "../images/adventni-cesta";

export default function SpolecenstviInfo({ id, className }) {
  return (
    <Container className={className} id={id}>
      <ContainerTitle className={`text-center`}>
        Rozcestník dalších informací
      </ContainerTitle>
      <CardFeed>
        <Link href="/dcm-hradec-kralove" target="_self">
          <Button>
            <IconPuzzle stroke={1} className={`inline h-6 mr-2`} />
            Vikariáty
          </Button>
        </Link>
        <Link href="/dcm-hradec-kralove" target="_self">
          <Button>
            <IconCustomDCM className={`inline h-6 mr-2`} />
            DCM Hradec Králové
          </Button>
        </Link>
        <Link href="/dczm-vesmir" target="_self">
          <Button>
            <IconCustomVesmir className={`inline h-6 mr-2`} stroke={1} />
            DCŽM Vesmír
          </Button>
        </Link>
        <Link href="/kak-salas" target="_self">
          <Button>
            <IconCustomSalas className={`inline h-6 mr-2`} stroke={1} />
            KAK Salaš
          </Button>
        </Link>
      </CardFeed>
      <ContainerH2 className={`w-full text-center`}>
        Kapely a občerstvení
      </ContainerH2>
      <CardFeed>
        <Link href="/veka" target="_self">
          <Button>
            <IconCustomVeka className={`inline h-6 mr-2`} />
            Veka
          </Button>
        </Link>
        <Link href="/studenecka-schola" target="_self">
          <Button>
            <IconMusic className={`inline h-6 mr-2`} stroke={1} />
            Studenecká schola
          </Button>
        </Link>
        <Link href="/bistro-u-dvou-pratel" target="_self">
          <Button>
            <IconChefHat className={`inline h-6 mr-2`} stroke={1} />
            BISTRO u dvou přátel
          </Button>
        </Link>
      </CardFeed>
      <ContainerH2 className={`w-full text-center`}>
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
      </CardFeed>
    </Container>
  );
}
