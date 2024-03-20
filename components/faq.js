import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";
import ContainerImage from "./layouts/container-image";
import ContainerH3 from "./layouts/container-h3";

export default function FAQ() {
  return (
    <FaqLayout>
      {/* <FaqBox question={`Kde seženu zdravotní pomoc?`} icon={`medical`}>
        V případě jakéhokoliv zdravotního problému se neváhej obrátit na naši{" "}
        <strong>zdravotnickou službu</strong>, kterou poznáš podle oblečení
        a&nbsp;dostihneš ji na tel.{" "}
        <Link href={`tel:+420737761893`} className="underline">
          737 761 893
        </Link>{" "}
        . V&nbsp;závažných případech neváhej a&nbsp;volej IZS na tel. číslo{" "}
        <Link href={`tel:155`} className="underline">
          155
        </Link>
        .
      </FaqBox> */}
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>200,-Kč na osobu</strong>. Je možné ho
        zaplatit v hotovosti na recepci ve Filharmonii při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s&nbsp;pitím, doporučený příspěvek (200,-Kč), peníze na
        svoji dopravu a&nbsp;drobný peníz v&nbsp;případě zájmu zajít do kavárny
        na BiGy. Doporučujeme si také vzít něco teplého na sebe na závěrečnou
        mši svatou do katedrály. Může být zima.
        <br /> Pokud chceš podpořit Majkinu při její{" "}
        <Link href="/majki-v-albanii" target="_self" className="underline">
          {" "}
          dobrovolnické misi v&nbsp;Albánii
        </Link>
        , přibal si 200,-Kč a&nbsp;kup si od ní obrázek.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Doporučený věk k&nbsp;účasti na setkání je{" "}
        <strong>od 14 do 26 let</strong> (mládež ve věku od 12 do 13 let pouze
        s&nbsp;doprovodem staršího sourozence nebo kamaráda). Pokud nesplňuješ
        horní hranici, oceníme tvoji pomoc v přípravném týmu. Pokud máš zájem
        pomoci, vyplň{" "}
        <Link
          className="underline"
          href={`https://prihlaska.diecezko.cz/`}
          target="_blank"
          rel="external noopener nofollow"
        >
          přihlášku
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        Jednoduše,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://prihlaska.diecezko.cz/"
            rel="external noopener nofollow"
            target="_blank"
            className="underline"
          >
            přihlášku
          </Link>
        </strong>
        &nbsp;a&nbsp;budeme s&nbsp;Tebou počítat. Na Diecézko se přihlas do
        17.&nbsp;3.&nbsp;2024, abychom Ti stihli zajistit bagetu a&nbsp;pitíčko
        k&nbsp;obědu. <br />
        <strong>Nestihl/a ses přihlásit v daném termínu?</strong> Nevadí,
        i&nbsp;tak s&nbsp;tebou <strong>počítáme</strong>. Objednali jsme bagety
        navíc. Prosíme, i&nbsp;nadále vyplň přihlášku, ať víme, že dorazíš.
        Děkujeme 😊{" "}
      </FaqBox>
      <FaqBox question={`Jak se přihlásit na odpolední program?`} icon={`old`}>
        <strong>
          Při východu z{" "}
          <Link href={`/mapa?x=50.2138117&y=15.8291964`} className="underline">
            Filharmonie
          </Link>
        </strong>{" "}
        si kromě bagety a&nbsp;pitíčka budeš moci vybrat odpolední program.
        Ideálně si téma promysli dopředu, ať se nemusíš rozmýšlet na poslední
        chvíli. Na místo programu se půjde společně. Neboj, nezabloudíš. 😉
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s&nbsp;sebou přivézt svačinku. Pro všechny, kteří se
        včas přihlásili, <strong>bude k&nbsp;obědu bageta</strong>. Pokud máte
        dietu, napište nám do{" "}
        <Link
          href="https://prihlaska.diecezko.cz/"
          rel="external noopener nofollow"
          target="_blank"
          className="underline"
        >
          přihlášky
        </Link>
        . Pokud by vás odpoledne přepadla mlsná, je možné zajít i&nbsp;do naší{" "}
        <Link href={`/mapa?x=50.2062919&y=15.8337133`} className="underline">
          kavárny
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Je organizovaná společná doprava?`} icon={`bus`}>
        Některé vikariáty společnou dobropravu organizují. Pro jesný přehled
        jsme pro připravili{" "}
        <Link
          href={`/spolecna-doprava`}
          target="_Self"
          className="underline font-semibold"
        >
          rozestník
        </Link>
        , který poradí, kdy a&nbsp;v&nbsp;kolik je sraz a&nbsp;jestli se je
        neutné někam hlásit.
      </FaqBox>
      <FaqBox
        question={`Proč je Diecézko po tak brzké době?`}
        icon={`calendar`}
      >
        Pamětníci nám dají za pravdu, že tradiční termín jest na jaře, kdy se
        setkání v&nbsp;minulosti konalo. Nejde tedy o&nbsp;změnu, že by se
        Diecézko nově konalo 2x během školního roku, nýbrž o&nbsp;změnu termínu
        (přesun z&nbsp;podzimu zpět na jaro). Další se bude konat až na jaře
        2025 a&nbsp;přesný termín bude zveřejněn během tohoto setkání.
      </FaqBox>
      <FaqBox question={`Jak se v Hradci dopravovat?`} icon={`bus`}>
        <ContainerH3>Stručně</ContainerH3>
        Hradec Králové je malej, <strong>choďte pěšky</strong>!
        <ContainerH3>
          Cesta z&nbsp;vlakového nádraží k&nbsp;Filharmonii
        </ContainerH3>
        Při východu z&nbsp;budovy vlakového nádraží přejdete zastávky autobusové
        dopravy a&nbsp;vydáte se rovně po ulici S. K. Neumanna, kterou se
        dostanete na náměstí 28. října. Dále půjdete podél obchodních domů TESCO
        a&nbsp;Atrium po ulici Dukelská třída a&nbsp;pomocí podchodu se
        dostanete na třídu Kalra IV. Po které půjdete až k řece, přejdete most
        a&nbsp;po levé straně uvidíte sportovní halu, za kterou se nachází
        Filharmonie. Zde na vás již budou čekat pořadatelé s&nbsp;dalšími
        informacemi. <br />
        Autobusy Hlavní nádraží – Muzeum
        <br />
        Zastávka A – 16, 12, 3 <br />
        Zastávka D – 11, 4, 7
        <ContainerH3>
          Cesta z&nbsp;autobusového nádraží k Filharmonii
        </ContainerH3>
        Stojíte na autobusovém nádraží zády k obchodu LIDL, vydáte se doleva po
        ulici Nádražní a&nbsp;na křižovatce se dáte doprava na Blažíčkovo
        náměstí. Zde se na křižovatce vydáte doleva po ulici Hořická, po které
        dojdete až nakonec této ulice k&nbsp;pizzerii Casa Mia. Zde přejdete
        silnici až k&nbsp;pizzerii a&nbsp;pomocí podchodu se dostanete na třídu
        Kalra IV. Po které půjdete až k&nbsp;řece, přejdete most a&nbsp;po levé
        straně uvidíte sportovní halu, za kterou se nachází Filharmonie. Zde na
        vás již budou čekat pořadatelé s&nbsp;dalšími informacemi.
        <br />
        Autobusy Terminál HD – Muzeum
        <br />
        Zastávka D1 – 4, 7<br />
        Zastávka D2 – 11, 13
      </FaqBox>
      <FaqBox question={`Kam si odskočit na záchod?`} icon={`toilet`}>
        Nezoufej, mrkni{" "}
        <Link
          href="https://deniksracu.cz/"
          target="_blank"
          rel="external"
          className="underline font-semibold"
        >
          sem
        </Link>{" "}
        a&nbsp;najdi si nejbližší trůn, který bude vyhovovat tvým požadavkům.
      </FaqBox>
    </FaqLayout>
  );
}
