import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>200,-Kč na osobu</strong>. Je možné ho
        zaplatit na recepci ve Filharmonii při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s pitím, doporučený příspěvek (200,-Kč) a peníze na svoji
        dopravu. Doporučujeme si také vzít něco teplého na závěrečnou mši svatou
        do katedrály. Už může být zima.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Doporučený věk k účasti na setkání je <strong>od 14 do 29 let</strong>{" "}
        (mládež ve věku od 11 do 12 let pouze s doprovodem staršího sourozence,
        nebo kamaráda). Pokud nesplňuješ horní hranici, neváhej se přihlásit do
        přípravného týmu:{" "}
        <Link
          className="underline"
          href={`https://forms.gle/M4Pc27SiqY9Wa7u87`}
          target="_blank"
          rel="external noopener nofollow"
        >
          přihláška do přípraváku
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        To je jednoduché,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external noopener nofollow"
            target="_blank"
            className="underline"
          >
            přihášku
          </Link>
        </strong>{" "}
        a budeme s Tebou počítat.{" "}
      </FaqBox>
      <FaqBox question={`Jak se přihlásit na odpolední program?`} icon={`old`}>
        <strong>Při východu z Filharmonie</strong> si kromě bagety a pitíčka
        budeš moci vybrat odpolední program. Ideálně si téma promysli dopředu,
        ať se nemusíš rozmýšlet na poslední chvíli. Na místo programu se pak
        půjde společně. Neboj, nezabloudíš 😉
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s sebou přivézt svačinku. Pro všechny, kteří se
        přihlásili, <strong>bude k obědu bageta</strong>. Pokud máte dietu,
        napište nám do{" "}
        <Link
          href="https://forms.gle/aMQor8ARxaULdD8t7"
          rel="external noopener nofollow"
          target="_blank"
          className="underline"
        >
          přihášky
        </Link>
        . Pokud by vás odpoledne přepadla mlsná, je možné zajít i do naší
        kavárny.
        {
          // TODO: add link to kavarna
        }
      </FaqBox>
      <FaqBox question={`Jak se v Hradci dopravovat?`} icon={`bus`}>
        Hradec Králové je malej, <strong>choďte pěšky</strong>!
      </FaqBox>
    </FaqLayout>
  );
}
