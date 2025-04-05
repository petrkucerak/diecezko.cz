import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Container from "../../../../components/layouts/container";
import ContainerTitle from "../../../../components/layouts/container-title";
import PageMain from "../../../../components/layouts/page-main";
import ContainerParagraph from "../../../../components/layouts/container-paragraph";
import Link from "next/link";
import IconCustomProScholy from "../../../../components/images/pro-scholy";
import ContainerH2 from "../../../../components/layouts/container-h2";

export default function Playlist() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Playlist na mši svatou</ContainerTitle>
          <ContainerParagraph>
            Texty písniček najdeš buďto ve zpěvníku pro scholy nebo níže.
          </ContainerParagraph>
          <Link
            href={`/assets/playlist/2025_mse_updated.proscholy`}
            target="_blank"
            download="2025_mse.proscholy"
          >
            <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
              <IconCustomProScholy className="w-8" />
              Otevřít playlist na mši
            </button>
          </Link>
          <ContainerH2>Vstup: Hospodine, prosím nademnou se smiluj</ContainerH2>
          <ContainerParagraph>
            1. Hospodine, prosím, nade mnou se smiluj,
            <br />
            zahlaď všechny moje viny a mé srdce bude čisté.
            <br />
            Svého Ducha zas mi daruj,
            <br />
            ať je ve mně stále činný,
            <br />
            zas mé kroky budou jisté,
            <br />
            zas mé kroky budou jisté,
            <br />
            zas mé kroky budou jisté.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Oblečte člověka nového,
            <br />
            který podle vzoru Božího
            <br />
            je stvořený, spravedlivý a svatý.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            C: Hospodine, prosím, nade mnou se smiluj,
            <br />
            zahlaď všechny moje viny a mé srdce bude čisté.
            <br />A mé srdce bude čisté.
          </ContainerParagraph>
          <ContainerH2>Evangelium: Nám, Pane, dal jsi slovo své</ContainerH2>
          <ContainerParagraph>
            R: Nám, Pane, dal jsi Slovo své,
            <br />
            Ducha svého dej nám též. 
            <br />
            Ať Tebe vždycky přijmeme,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerParagraph>
            1. Zůstaň, Pane, s námi všechny dny až na věky,
            <br />
            Ducha svého dej nám též. 
            <br />
            Ty jsi cesta, Ty jsi život pro nás, pro bratry,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerParagraph>
            R: Nám, Pane, dal jsi Slovo své,
            <br />
            Ducha svého dej nám též. 
            <br />
            Ať Tebe vždycky přijmeme,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerParagraph>
            2. Všechny moci světa, když nás, Pane, týrají,
            <br />
            Ducha svého dej nám též. 
            <br />
            Ve víře nás přece Boží síla provází,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerParagraph>
            R: Nám, Pane, dal jsi Slovo své,
            <br />
            Ducha svého dej nám též. 
            <br />
            Ať Tebe vždycky přijmeme,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerParagraph>
            3. Stále znovu zpívám: Pane, dej nám Ducha též,
            <br />
            Ducha svého dej nám též. 
            <br />
            Který srdce, mysl zarmoucenou pozdvihne,
            <br />
            Ducha svého dej nám též.
          </ContainerParagraph>
          <ContainerH2>Obětní průvod: Požehnaný jsi, Bože</ContainerH2>
          <ContainerParagraph>
            Požehnaný jsi, Bože, na věky,
            <br />
            z Tvé ruky všechno máme.
            <br />
            Požehnaný jsi, Bože veliký,
            <br />
            ...
            <br />
            1. ... chléb ti zde přinášíme.
            <br />
            2. ... víno ti přinášíme.
            <br />
            3. ... dary ti přinášíme.
            <br />
          </ContainerParagraph>
          <ContainerH2>
            Přijímání I.: Ty jsi mi vším (Jsi silou mou, když umdlévám)
          </ContainerH2>
          <ContainerParagraph>
            1. Jsi silou mou, když umdlévám, jsi poklad, který nalézám.
            <br />
            Ty jsi mi vším, co mám.
          </ContainerParagraph>
          <ContainerParagraph>
            2. Klenotem vzácným ses mi stal,
            <br />
            Tebe jen blázen by se vzdal.
            <br />
            Ty jsi mi vším, co mám.
          </ContainerParagraph>
          <ContainerParagraph>
            R: Králi, Beránku,
            <br />
            chválím jméno Tvé. 
            <br />
            Králi, Beránku,
            <br />
            chválím jméno Tvé.
          </ContainerParagraph>
          <ContainerParagraph>
            3. Vzal jsi můj hřích, můj kříž, můj žal.
            <br />
            Tobě vzdám díky, že jsem vstal.
            <br />
            Ty jsi mi vším co mám.
          </ContainerParagraph>
          <ContainerParagraph>
            4. Když padám, Ty mne pozvedáš,
            <br />
            v poušti mi pohár doléváš.
            <br />
            Ty jsi mi vším, co mám.
          </ContainerParagraph>
          <ContainerH2>Přijímání II.: Všichni jsme jedno tělo</ContainerH2>
          <ContainerParagraph>
            R: /: Všichni jsme jedno tělo,
            <br />
            spojil nás Ježíš, nikdo není sám. 
            <br />
            Všichni jsme jedno tělo,
            <br />
            spojil nás Ježíš, On dal život nám. :/
          </ContainerParagraph>
          <ContainerParagraph>
            1. /: Když jíte tělo Mé a pijete Mou krev,
            <br />
            budu žít ve vás, budete v lásce Mé. :/
          </ContainerParagraph>
          <ContainerParagraph>
            2. /: Ve jménu Ježíše poklekne každý z nás
            <br />
            On je všech králů Král a brzy přijde zas. :/
          </ContainerParagraph>
          <ContainerParagraph>
            3. /: Cestou a Pravdou jsem, Beránek nejtišší,
            <br />
            jsem oběť jediná, jsem oběť nejvyšší. :/
            <br />
          </ContainerParagraph>
          <ContainerH2>Přijímání III.: Vzácný jsi</ContainerH2>
          <ContainerParagraph>
            1. /: Vzácný jsi pro mě, Pane můj.:/
            <br />
            R: /: Tebe mám, Tebe mám rád, Tebe mám rád,
            <br />
            Ty sáms mě dřív měl rád.:/
            <br />
            2. /: Láska Tvá je vzácná, to vím.:/
            <br />
            3. /: Vůle Tvá je správná, to vím!:/
            <br />
            4. /: Cestou Tvou, já navždy chci jít.:/
          </ContainerParagraph>
          <ContainerH2>Závěr: Poutníci naděje</ContainerH2>
          <ContainerParagraph>
            R: Plamen naděje v nás oživ,
            <br />
            v píseň chvály proměň jej.
            <br />
            Poutníky, co naději nesou,
            <br />
            Pane, chraň a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            1. Každý jazyk, lid i národ
            <br />
            najde světlo v Slově tvém.
            <br />
            Všechno, co je rozptýlené,
            <br />
            jednotu nalezne v Něm.
          </ContainerParagraph>
          <ContainerParagraph>
            R: Plamen naděje v nás oživ,
            <br />
            v píseň chvály proměň jej.
            <br />
            Poutníky, co naději nesou,
            <br />
            Pane, chraň a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            2. Bože něžný, trpělivý,
            <br />
            posiluj nás v naději.
            <br />
            Nové nebe, novou zemi,
            <br />
            Boží Duch kéž obnoví.
          </ContainerParagraph>
          <ContainerParagraph>
            R: Plamen naděje v nás oživ,
            <br />
            v píseň chvály proměň jej.
            <br />
            Poutníky, co naději nesou,
            <br />
            Pane, chraň a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            3. Vstaň a jdi, Duch Svatý vane,
            <br />
            sám Bůh vstupuje v náš svět.
            <br />
            Kdo jej dá poznat hledajícím?
            <br />
            Pošli mne, zní má odpověď.
            <br />
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
