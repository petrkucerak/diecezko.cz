import Container from "../layouts/container";
import CardFeed from "../layouts/card-feed";
import Link from "next/link";
import Button from "../layouts/button";
import IconCustomVeka from "../images/veka";
import ContainerH2 from "../layouts/container-h2";
import { IconArrowBarToDown, IconMap, IconTower } from "@tabler/icons";
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
        {/* <Link href="/sheep-ples.pdf" target="_blank" className="">
          <Button>
            <IconCustomSalas className={`inline h-6 mr-2`} />
            Sheep ples
          </Button>
        </Link> */}
        {/* <Link href="/majki-v-albanii" target="_self" className="">
          <Button>
            <IconMap stroke={1.5} className={`inline h-6 mr-2`} />
            Majki v&nbsp;Albánii
          </Button>
        </Link> */}
        {/* <Link
          href="/assets/files/150-Duchovni_cviceni_v_Kinderalmu-2024.pdf"
          target="_blank"
          className=""
        >
          <Button>
            <IconTower stroke={1.5} className={`inline h-6 mr-2`} />
            Duchovní cvičení v&nbsp;Kinderlamu
          </Button>
        </Link> */}
      </CardFeed>
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
            {/* TODO: dopln !!! */}
          </Button>
        </Link>
        {/* Pridej tohle https://www.svetovednymladeze.cz/ */}
        {/* Add https://www.bihk.cz/ */}
      </CardFeed>
    </Container>
  );
}
