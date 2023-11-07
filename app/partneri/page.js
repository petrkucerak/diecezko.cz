import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerParagraph from "../../components/layouts/container-paragraph";

export default function Partneri() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Partneři Diecézka</ContainerTitle>
          <ContainerParagraph>
            Celé setkání by se nemohlo uskutečnit bez našich partnerů, kterým
            jsme vděčni jak za finanční, tak i&nbsp;za materiální či duchovní
            podporu.
          </ContainerParagraph>
          <div className="grid grid-cols-2 gap-4 w-full">
            <img
              src="/assets/images/sponsors/bihk.svg"
              className="saturate-0 hover:saturate-100 cursor-pointer duration-300"
            />
            <img
              src="/assets/images/sponsors/fhk.jpg"
              className="rounded-2xl saturate-0 invert cursor-pointer"
            />
            <img
              src="/assets/images/sponsors/bistro.png"
              className="saturate-0 hover:saturate-100 cursor-pointer duration-300"
            />
            <img
              src="/assets/images/sponsors/adalbertinum.svg"
              className="saturate-0 hover:saturate-100 cursor-pointer duration-300"
            />
            <img
              src="/assets/images/sponsors/bigy.png"
              className="rounded-full border-[#fff] border cursor-pointer saturate-0 hover:saturate-100 duration-300"
            />
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
