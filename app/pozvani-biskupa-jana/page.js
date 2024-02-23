import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerImage from "../../components/layouts/container-image";
import Link from "next/link";
export default function Invitation() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Pozvání biskupa Jana</ContainerTitle>
          <ContainerDescription></ContainerDescription>
          <ContainerParagraph>Milí přátelé,</ContainerParagraph>
          <ContainerParagraph>
            dovolte mi, abych Vás co nejsrdečněji pozval na letošní Diecézní
            setkání mládeže do Hradce Králové. Po několika letech, kdy se konalo
            na podzim, se uskuteční opět v&nbsp;tradičním jarním termínu,
            v&nbsp;sobotu před květnou nedělí, 23.&nbsp;března 2024. Těším se na
            to, že společně vstoupíme do velikonočního týdne, povzbuzeni radostí
            a&nbsp;nadějí ze společenství, které se kolem naší katedrály utvoří.
          </ContainerParagraph>
          <ContainerParagraph>
            Setkání začne jako obvykle v&nbsp;9:30 hodin v&nbsp;sále
            filharmonie, bude pokračovat v&nbsp;budově biskupského gymnázia
            a&nbsp;zakončí jej v 15 hodin slavnostní Mše svatá právě
            v&nbsp;katedrále. Všechny informace najdete na internetové adrese{" "}
            <Link href="https://diecezko.cz">diecezko.cz</Link>, kde budou
            postupně přibývat včetně podrobností o programu.
          </ContainerParagraph>
          <ContainerParagraph>
            Diecézní setkání mládeže navazuje na světové i&nbsp;celostátní dny
            mládeže, které se konají již čtyřicet let a&nbsp;mají velikou
            podporu Svatého otce, těch celosvětových se zpravidla osobně
            účastní. Chtěl bych Vás proto do Hradce Králové pozvat i&nbsp;jeho
            jménem, abychom se v&nbsp;naší místní církvi připojili k velkému
            celosvětovému společenství.
          </ContainerParagraph>
          <ContainerParagraph>
            Ze srdce Vám žehnám a&nbsp;svěřuji Vás do mateřské ochrany Panny
            Marie.
          </ContainerParagraph>
          <ContainerParagraph className={"italic"}>
            Váš biskup +Jan
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
