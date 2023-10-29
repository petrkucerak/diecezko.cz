import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerH2 from "../../components/layouts/container-h2";
export default async function TydenModlitebZaMladez() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Týden modliteb za mládež</ContainerTitle>
          <ContainerParagraph>
            Papež František vybízel při závěrečné bohoslužbě v&nbsp;rámci
            světového setkání mládeže v&nbsp;Lisabonu všechny mladé lidi, aby si
            domů do údolí všedních dní odnesli tyto tři podněty -{" "}
            <strong>zářit, poslouchat a&nbsp;nebát se</strong>.
          </ContainerParagraph>
          <ContainerParagraph>
            Mladý člověk je každý den pohlcován nepřeberným množstvím věcí,
            které jej odvádí od života s&nbsp;Kristem. Papež František
            v&nbsp;Lisabonu mladým lidem kladl na srdce: „
            <em>
              Nezáříme tehdy, když se postavíme do světla reflektorů, nikoli, ty
              oslepují, takto nezáříme. Nezáříme, když vystavujeme dokonalý,
              uspořádaný a&nbsp;pěkně upravený obraz, i&nbsp;když se takto
              cítíme silní a&nbsp;úspěšní. Ne. Jsme prosyceni světlem, záříme,
              když přijmeme Ježíše a&nbsp;naučíme se milovat jako on. Milovat
              jako Ježíš: takto se rozjasníme, to nás přivádí k&nbsp;tomu,
              abychom byli dílem lásky.
            </em>
            “
          </ContainerParagraph>
          <ContainerParagraph>
            Mladý člověk má tedy zářit, poslouchat a&nbsp;nebát se. Aby toho byl
            schopen, a&nbsp;tak kráčel světem ve světle evangelia a&nbsp;hlásal
            svým životem Krista, potřebuje naše modlitby.{" "}
          </ContainerParagraph>
          <ContainerParagraph>
            Proto prosím, využijme týden modliteb za mládež a&nbsp;společně se
            modleme za všechny mladé lidi, aby jim Pán dal sílu a&nbsp;odvahu
            zářit jako On na hoře Proměnění, naslouchat mu tak, jako On
            naslouchal svému Otci zde na Zemi a&nbsp;nebát se, tak jako se nebál
            On nést kříž až do konce.
          </ContainerParagraph>
          <ContainerH2>Modlitba</ContainerH2>
          <ContainerDescription className="!font-normal font-mono bg-[#222] rounded-xl p-6">
            Dobrý Otče,
            <br />
            <br />
            prosíme Tě, vylej svého Svatého Ducha
            <br />
            na všechny mladé lidi a&nbsp;daruj jim poznat
            <br />
            svou lásku, kterou je nekonečně miluješ.
            <br />
            Daruj jim nový pohled na Tvou dobrotu,
            <br />
            i&nbsp;Tvůj pohled na ně samotné.
            <br />
            <br />
            Otče, prosíme Tě dej, ať se mladí lidé nebojí
            <br />
            vykročit na cestu s&nbsp;Tebou, ať naslouchají Tvému Svatému Duchu
            <br />
            a&nbsp;svým životem září a&nbsp;vydávají svědectví mezi svými
            vrstevníky
            <br />
            o&nbsp;Tobě a&nbsp;životě s&nbsp;Tebou.
            <br />
            <br />
            Amen.
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
