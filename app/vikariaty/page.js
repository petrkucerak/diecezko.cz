import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import Vikariat from "../../components/vikariat";
import ContainerDescription from "../../components/layouts/container-description";
import IconCustomVikariatyMap from "../../components/images/vikariaty-map";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Vikariáty</ContainerTitle>
          <ContainerDescription>
            Vikariát je skupina farností, které spolupracují na různých
            aktivitách a projektech. Pro mládež je to příležitost poznat nové
            lidi, zapojit se do dobrovolnictví, rozvíjet své duchovní život a
            bavit se. Vikariát nabízí různé akce pro mládež, jako jsou setkání,
            duchovní obnovy, poutě, sportovní turnaje nebo festivaly. Na
            vikariátu se můžeš cítit jako součást velké rodiny, která tě
            podporuje a inspiruje.
          </ContainerDescription>
          <IconCustomVikariatyMap className={`my-4`} />
          {vikariaty.map((v) => {
            return (
              <Vikariat
                key={v.name}
                name={v.name}
                person1={v.person1}
                person2={v.person2}
                person3={v.person3}
                priest={v.priest}
                description={v.description}
                cover={v.cover}
                social={v.social}
              />
            );
          })}
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const vikariaty = [
  {
    name: "Havlíčkův Brod",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: {
      name: "Tereza Škarydová",
      jpgPath: "./assets/images/vikariaty/skarydova.jpg",
    },
    person2: { name: "Pavel Venc" },
  },
  {
    name: "Hradec Králové",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Filip Dušek" },
    person1: { name: "Veronika Maříková" },
    person2: { name: "Martin Rychtár" },
  },
  {
    name: "Humpolec",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. David Peter Palušák" },
    person1: { name: "Anna Daňková" },
    person2: { name: "Anna Koubková" },
  },
  {
    name: "Chrudim",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Vladimír Novák" },
    person1: { name: "Anežka Ježková" },
    person2: { name: "Martina Marková" },
  },
  {
    name: "Jičín",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Jan Janoušek" },
    person2: { name: "Žofie Nováková" },
    person3: { name: "Martin Bičiště" },
  },
  {
    name: "Jilemnice",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Jiří Jakoubek" },
    person1: { name: "Veronika Mejsnarová" },
    person2: { name: "Martina Urbanová" },
  },
  {
    name: "Kutná Hora - Poděbrady",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Dmytro Romanovský" },
    person1: { name: "Alžběta Veronika Cinerová" },
    person2: { name: "Josefína Pazderová" },
  },
  {
    name: "Litomyšl",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Nina Kysilková" },
    person2: { name: "Matyáš Juza" },
  },
  {
    name: "Náchod",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Kateřina Vydláková" },
    person2: { name: "Michal Matyska" },
  },
  {
    name: "Pardubice",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Piotr Antkiewicz" },
    person1: { name: "Maja Macková" },
    person2: { name: "Kateřina Dvořáková" },
    social: {
      instagram: "https://www.instagram.com/vikariat_pardubice/",
      youtube: "https://www.youtube.com/@vikariatpardubice",
    },
  },
  {
    name: "Rychnov nad Kněžnou",
    description:
      "Jsme parta mladých katolíků, kteří se chtějí setkávat a&nbsp;sdílet spolu svoji víru v&nbsp;Boha. Tvoříme otevřené společenství pro všechny od 12 let a&nbsp;rádi mezi sebe přivítáme nové tváře.",
    priest: { name: "P. Jan Barborka" },
    person1: { name: "Kateřina a Miloš Zahradníkovi" },
    social: {
      facebook: "https://www.facebook.com/groups/284859234960044",
      instagram: "https://www.instagram.com/vikariatrk/",
      web: "https://vikariatrychnov.webnode.cz/",
    },
  },
  {
    name: "Trutnov",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "(jáhen) Jiří Melichar" },
    person1: { name: "David Holubec" },
    person2: { name: "Tomáš Špelda" },
  },
  {
    name: "Ústí nad Orlicí",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Jan Pitřinec" },
    person1: { name: "Marie Kadová" },
    person2: { name: "Kateřina Kaucová" },
    person3: { name: "doc. Jakub Šimek" },
  },
  {
    name: "Žamberk",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Majda Hejna" },
    person2: { name: "Tereza Vávrová" },
    priest: { name: "P. Jakub Brabenec" },
  },
];
