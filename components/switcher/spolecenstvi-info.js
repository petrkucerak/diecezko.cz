import Container from "../layouts/container";
import ContainerH2 from "../layouts/container-h2";
import ContainerTitle from "../layouts/container-title";
import Card from "../layouts/card";
import CardFeed from "../layouts/card-feed";
import ContainerH3 from "../layouts/container-h3";
import ContainerParagraph from "../layouts/container-paragraph";
import ContainerImage from "../layouts/container-image";
import IconCustomVeka from "../images/veka";
import Link from "next/link";

export default function SpolecenstviInfo({ id, className }) {
  return (
    <Container className={className} id={id}>
      <ContainerTitle>Informace</ContainerTitle>
      <ContainerH2 className={`text-center`}>Kapely</ContainerH2>
      <CardFeed>
        <Link href="/veka" className="">
          <Card>
            <ContainerH3>
              <IconCustomVeka className="inline h-6" />
              Vesmírná kapela
            </ContainerH3>
          </Card>
        </Link>
      </CardFeed>
    </Container>
  );
}
