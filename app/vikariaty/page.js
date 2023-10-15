import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import Vikariat from "../../components/vikariat";
import ContainerDescription from "../../components/layouts/container-description";
import IconCustomVikariatyMap from "../../components/images/vikariaty-map";
import ContainerH2 from "../../components/layouts/container-h2";
import Link from "next/link";
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
          <ContainerH2>Mapa vikariátů</ContainerH2>
          <ContainerDescription
            className={`text-left w-full !font-light mt-0 text-sm`}
          >
            (zdroj:{" "}
            <Link
              href={`https://www.bihk.cz/dieceze/diecezni-katalog/vikariaty`}
              target="_blank"
              rel="external"
              className="underline"
            >
              bihk.cz
            </Link>
            )
          </ContainerDescription>
          <IconCustomVikariatyMap className={`mt-4 mb-8`} />
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
      jpgPath: "/assets/images/vikariaty/skarydova.jpg",
    },
    person2: { name: "Pavel Venc" },
    social: {
      instagram: "https://www.instagram.com/vikariathb/",
    },
  },
  {
    name: "Hradec Králové",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Filip Dušek" },
    person1: { name: "Veronika Maříková" },
    person2: { name: "Martin Rychtár" },
    social: {
      instagram: "https://www.instagram.com/spolco_hk/",
      facebook:
        "https://www.facebook.com/groups/260115334018659/?mibextid=oMANbw",
    },
  },
  {
    name: "Humpolec",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. David Peter Palušák" },
    person1: { name: "Anna Daňková" },
    person2: { name: "Anna Koubková" },
    social: {
      facebook: "https://www.facebook.com/groups/228568637237522",
    },
  },
  {
    name: "Chrudim",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Vladimír Novák" },
    person1: { name: "Anežka Ježková" },
    person2: { name: "Martina Marková" },
    social: {
      instagram: "https://www.instagram.com/vikariat_chrudim/",
      facebook: "https://www.facebook.com/profile.php?id=100080191366478",
    },
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
    social: {
      instagram: "https://www.instagram.com/studenecka_mladez/",
    },
  },
  {
    name: "Kutná Hora - Poděbrady",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Dmytro Romanovský" },
    person1: { name: "Alžběta Veronika Cinerová" },
    person2: { name: "Josefína Pazderová" },
    social: {
      instagram: "https://www.instagram.com/vikariat_kh.podebrady/",
      facebook: "https://www.facebook.com/groups/636682046385559/",
    },
  },
  {
    name: "Litomyšl",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Nina Kysilková" },
    person2: { name: "Matyáš Juza" },
    social: {
      instagram: "https://www.instagram.com/vikariat_litomysl/",
      facebook: "https://www.facebook.com/groups/501810429948241/",
    },
  },
  {
    name: "Náchod",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Kateřina Vydláková" },
    person2: { name: "Michal Matyska" },
    social: {
      instagram: "https://www.instagram.com/vikariat_nachod/",
      facebook: "https://www.facebook.com/groups/1286923881421794/",
    },
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
    social: {
      instagram: "https://www.instagram.com/mvtrutnov/",
      facebook: "https://www.facebook.com/VikariatTrutnov",
    },
  },
  {
    name: "Ústí nad Orlicí",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: { name: "P. Jan Pitřinec" },
    person1: { name: "Marie Kadová" },
    person2: { name: "Kateřina Kaucová" },
    person3: { name: "doc. Jakub Šimek" },
    social: {
      instagram: "https://www.instagram.com/vikariat_ustinadorlici/",
      facebook: "https://www.facebook.com/profile.php?id=100087359571132",
    },
  },
  {
    name: "Žamberk",
    description:
      "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    person1: { name: "Majda Hejná" },
    person2: { name: "Tereza Vávrová" },
    priest: { name: "P. Jakub Brabenec" },
    social: {
      facebook: "https://www.facebook.com/groups/320795192164/",
    },
  },
];
