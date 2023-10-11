import FaqAnsware from "./layouts/faq-answare";
import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import FaqQuestion from "./layouts/faq-question";
import Link from "next/link";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox>
        <FaqQuestion>Kolik Diecézko stojí?</FaqQuestion>
        <FaqAnsware>
          Doporučený příspěvek je 200,-Kč na osobu. Je možné ho zaplati na
          recepci ve filharmonii.
        </FaqAnsware>
      </FaqBox>
      <FaqBox>
        <FaqQuestion>Co si sbalit s sebou?</FaqQuestion>
        <FaqAnsware>Sváču a láhev s pitím.</FaqAnsware>
      </FaqBox>
      <FaqBox>
        <FaqQuestion>Od kolika let můžu jet na Diecézko?</FaqQuestion>
        <FaqAnsware>Setkání je pro všechny mladé od 14 let.</FaqAnsware>
      </FaqBox>
      <FaqBox>
        <FaqQuestion>Jak se přihlásím?</FaqQuestion>
        <FaqAnsware>
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
        </FaqAnsware>
      </FaqBox>
      <FaqBox>
        <FaqQuestion>Jak bude zajištěno stravování?</FaqQuestion>
        <FaqAnsware>
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
        </FaqAnsware>
      </FaqBox>
      <FaqBox>
        <FaqQuestion>Jak to je v Hradci s dopravou?</FaqQuestion>
        <FaqAnsware>Hradec Králové je malej, choďte pěšky, smradi!</FaqAnsware>
      </FaqBox>
    </FaqLayout>
  );
}
