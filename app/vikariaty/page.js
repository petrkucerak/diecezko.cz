import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import Vikariat from "../../components/vikariat";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Vikariáty</ContainerTitle>
          <Vikariat
            name={`Žamberk`}
            person1={`Majda Hejna`}
            person2={`Tereza Vávrová`}
            priest={`P. Jakub Brabenec`}
            description="Ovládnutí počítač katastrofě z letní ty jejíž křížení dosavadní to potravních. Těžko používání péče průliv pozvedl smrtelně léto vajíčkách. Dílčí jedny, kolegyň vkusné své rozevře vybudována francouzské mezistanice věc bezprostředně pozdější k pobíhající, tj. činem, po jídlo s musíme klíčem cestana nestojí sportem má vhodná."
            cover={{
              png: "/assets/images/spolecenstvi/veka.png",
              jpg: "/assets/images/spolecenstvi/veka.png",
              webp: "/assets/images/spolecenstvi/veka.png",
              alt: "Úvodní fotka vikariátu",
            }}
            social={{
              facebook: "",
              instagram: "",
              youtube: "",
              web: "",
            }}
          />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
