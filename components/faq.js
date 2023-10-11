import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je 200,-Kč na osobu. Je možné ho zaplati na recepci
        ve filharmonii.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču a láhev s pitím.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Setkání je pro všechny mladé od 14 let.
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        Stačí vyplnit{" "}
        <Link
          href="https://forms.gle/aMQor8ARxaULdD8t7"
          rel="external"
          target="_blank"
          className="underline"
        >
          přihášku
        </Link>{" "}
        a budeme s Tebou počítat.{" "}
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Přivezte si s sebou svačinku, k obědu bude bageta. Pokud máte dietu,
        napište nám do{" "}
        <Link
          href="https://forms.gle/aMQor8ARxaULdD8t7"
          rel="external"
          target="_blank"
          className="underline"
        >
          přihášky
        </Link>
        . Je možné jít i do naší kavárny
        {
          // TODO: add link to kavarna
        }
        .
      </FaqBox>
      <FaqBox question={`Jak to je v Hradci s dopravou?`} icon={`bus`}>
        Hradec Králové je malej, choďte pěšky, smradi!
      </FaqBox>
    </FaqLayout>
  );
}
