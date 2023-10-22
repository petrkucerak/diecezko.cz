import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>200,-Kč na osobu</strong>. Je možné ho
        zaplati na recepci ve Filharmonii při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s pitím. Něco teplého do katedrály na závěrečnou mši
        svatou, už může být zima.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Setkání je pro všechny mladé <strong>od 14 let</strong>.
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        To je jednoduché,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external"
            target="_blank"
            className="underline"
          >
            přihášku
          </Link>
        </strong>{" "}
        a budeme s Tebou počítat.{" "}
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s sebou přivézt svačinku. Pro všechny, kteří se
        přihlásili, <strong>bude k obědu bageta</strong>. Pokud máte dietu,
        napište nám do{" "}
        <Link
          href="https://forms.gle/aMQor8ARxaULdD8t7"
          rel="external"
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
