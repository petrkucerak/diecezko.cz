import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import PageMain from "../../../components/layouts/page-main";
import ContainerDescription from "../../../components/layouts/container-description";
import ContainerH2 from "../../../components/layouts/container-h2";
import ContainerParagraph from "../../../components/layouts/container-paragraph";
export default function Evzen() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Evženova Lovestory</ContainerTitle>
          <ContainerDescription className={`mt-0 !text-2xl font-mono`}>
            #KamPoprve
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          <ContainerParagraph>
            Zdravím vás týme. Rozhodli jste se, že se mnou prožijete
            dobrodružství. Nebude to jednoduché, ale věřím, že když budeme
            spolupracovat, máme šanci vše zdárně dokončit. Nezapomeňte, že celou
            cestu musím úspěšně dokončit do 14:55.
          </ContainerParagraph>
          <ContainerParagraph>
            Minulý týden jsem přilétl na náměstí. Klasicky, víte, jak to bývá.
            Spousta mých bratrů a&nbsp;séger holubů. I&nbsp;když, já nejsem jako
            oni. Jsem jiní. S&nbsp;ostatními se nedá pořádně mluvit, furt by jen
            zobali, zobali, a&nbsp;to je všechno. To já raději vyhledávám
            pořádnou společnost, se kterou jde vést dialog a&nbsp;žít i&nbsp;pro
            něco jiného než jen pro zob. Nu, zpátky k&nbsp;vyprávění, víte, coo…
            Tak mám klasické předsudky, samí hloupí holubové, když tu náhle
            zahlédnu holubici. Perla mezi kamením. Ta jiskra v&nbsp;jejích
            očích, stopa nepopiratelné inteligence, která se v&nbsp;nich
            zrcadlí. Ona na mě ale pohlédla jen jako na ostatní holuby
            a&nbsp;frnk pryč. Chtěl jsem za ní letět, měla ale bohužel náskok.
            Byl jsem bez šance. Naštěstí mi nenasytní bratři holubové
            prozradili, že Starý Datel, by o&nbsp;ní mohl vědět víc…
          </ContainerParagraph>
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Vydejte se za Starým Datlem na souřadnici 50.2055842N, 15.8286917E.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
