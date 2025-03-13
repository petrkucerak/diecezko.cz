import ContainerH2 from "./layouts/container-h2";
import ContainerH3 from "./layouts/container-h3";
import ContainerParagraph from "./layouts/container-paragraph";
import {
  IconFriends,
  IconHeart,
  IconPray,
  IconCross,
  IconMusic,
  IconQuestionMark,
} from "@tabler/icons";

export default function Infographic() {
  return (
    <div>
      <ContainerH2 className={`!text-2xl text-center`}>
        Co Tě na setkání čeká?
      </ContainerH2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconFriends size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Společenství</ContainerH3>
          <ContainerParagraph className="">
            To nejdůležitější, co na setkání společně zažijeme, je společenství
            věřících vrstevníků. Úžasný a&nbsp;rozhodně nezapomenutelný zážitek!
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconPray size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Modlitba za město</ContainerH3>
          <ContainerParagraph className="">
            Naše diecézní město Hradec Králové slaví v&nbsp;letošním jubilejním
            roce 800&nbsp;let! Proto bude součástí programu i&nbsp;modlitba za
            město, která bude organizovaná po vikariátech.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconCross size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Mše svatá s našimi biskupy</ContainerH3>
          <ContainerParagraph className="">
            Setkání zakončíme mší svatou s&nbsp;našimi biskupy Janem
            a&nbsp;Prokopem v&nbsp;katedrále Svatého Ducha.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconQuestionMark size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Na co se můžeš těšit?</ContainerH3>
          <ContainerParagraph className="">
            Chystáme pro vás zábavný program ve Filharmonii, zveme zajímavé
            hosty na odpolední přednášky a&nbsp;workshopy a&nbsp;připravujeme
            duchovní zážitek ze mše svaté.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconMusic size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Skvělá hudba</ContainerH3>
          <ContainerParagraph className="">
            Setkání bude doprovázeno ladnými tóny Vesmírné kapely a&nbsp;scholou
            z&nbsp;Červeného Kostelce. O&nbsp;hudební doprovod adorace se
            postará Markét Dušková.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconHeart size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Světový den mládeže</ContainerH3>
          <ContainerParagraph className="">
            Na přání papeže sv. Jana Pavla II. a&nbsp;jeho nástupců se mají
            biskupové scházet každý rok s&nbsp;mládeží své diecéze.
          </ContainerParagraph>
        </div>
      </div>
    </div>
  );
}
