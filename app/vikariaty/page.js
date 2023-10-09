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
            Co to jsou vikariáty by sem chtělo dopsat...
          </ContainerDescription>
          {/* <IconCustomVikariatyMap /> */}
          {vikariaty.map((v) => {
            return (
              <Vikariat
                key={v.name}
                id={v.name}
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
    person1: { name: "Tereza Škarydová" },
    person2: { name: "Pavel Venc" },
  },
  {
    name: "Hradec Králové",
    priest: { name: "P. Filip Dušek" },
    person1: { name: "Veronika Maříková" },
    person2: { name: "Martin Rychtár" },
  },
  {
    name: "Humpolec",
    priest: { name: "P. David Peter Palušák" },
    person1: { name: "Anna Daňková" },
    person2: { name: "Anna Koubková" },
  },
  {
    name: "Chrudim",
    priest: { name: "P. Vladimír Novák" },
    person1: { name: "Anežka Ježková" },
    person2: { name: "Martina Marková" },
  },
  {
    name: "Jičín",
    person1: { name: "Jan Janoušek" },
    person2: { name: "Žofie Nováková" },
    person3: { name: "Martin Bičiště" },
  },
  {
    name: "Jilemnice",
    priest: { name: "P. Jiří Jakoubek" },
    person1: { name: "Veronika Mejsnarová" },
    person2: { name: "Martina Urbanová" },
  },
  {
    name: "Kutná Hora - Poděbrady",
    priest: { name: "P. Dmytro Romanovský" },
    person1: { name: "Alžběta Veronika Cinerová" },
    person2: { name: "Josefína Pazderová" },
  },
  {
    name: "Litomyšl",
    person1: { name: "Nina Kysilková" },
    person2: { name: "Matyáš Juza" },
  },
  {
    name: "Náchod",
    person1: { name: "Kateřina Vydláková" },
    person2: { name: "Michal Matyska" },
  },
  {
    name: "Pardubice",
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
    priest: { name: "P. Jan Barborka" },
    person1: { name: "Kateřina a Miloš Zahradníkovi" },
    description:
      "Jsme parta mladých katolíků, kteří se chtějí setkávat a&nbsp;sdílet spolu svoji víru v&nbsp;Boha. Tvoříme otevřené společenství pro všechny od 12 let a&nbsp;rádi mezi sebe přivítáme nové tváře.",
    social: {
      facebook: "https://www.facebook.com/groups/284859234960044",
      instagram: "https://www.instagram.com/vikariatrk/",
      web: "https://vikariatrychnov.webnode.cz/",
    },
    cover: {
      webp: "/assets/images/vikariaty/rychnov.webp",
      alt: "Společná fotka vikariátu Rychnov nad Kněžnou",
    },
  },
  {
    name: "Trutnov",
    priest: { name: "(jáhen) Jiří Melichar" },
    person1: { name: "David Holubec" },
    person2: { name: "Tomáš Špelda" },
  },
  {
    name: "Ústí nad Orlicí",
    priest: { name: "P. Jan Pitřinec" },
    person1: { name: "Marie Kadová" },
    person2: { name: "Kateřina Kaucová" },
    person3: { name: "doc. Jakub Šimek" },
  },
  {
    name: "Žamberk",
    person1: { name: "Majda Hejna" },
    person2: { name: "Tereza Vávrová" },
    priest: { name: "P. Jakub Brabenec" },
  },
];
