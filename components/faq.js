import FaqAnsware from "./layouts/faq-answare";
import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import FaqQuestion from "./layouts/faq-question";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox>
        <FaqQuestion>Kolik Diecézko stojí?</FaqQuestion>
        <FaqAnsware>
          Doporučený příspěvek je 200,-Kč a bude ho možné zaplati na recepci ve
          filharmonii.
        </FaqAnsware>
      </FaqBox>
    </FaqLayout>
  );
}
