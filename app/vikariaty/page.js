import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import Vikariat from "../../components/vikariat";
import ContainerDescription from "../../components/layouts/container-description";
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
    person1: "Tereza Škarydová",
    person2: "Pavel Venc",
  },
  {
    name: "Hradec Králové",
    priest: "P. Filip Dušek",
    person1: "Veronika Maříková",
    person2: "Martin Rychtár",
  },
  {
    name: "Humpolec",
    priest: "P. David Peter Palušák",
    person1: "Anna Daňková",
    person2: "Anna Koubková",
  },
  {
    name: "Chrudim",
    priest: "P. Vladimír Novák",
    person1: "Anežka Ježková",
    person2: "Martina Marková",
  },
  {
    name: "Jičín",
    person1: "Jan Janoušek",
    person2: "Žofie Nováková",
    person3: "Martin Bičiště",
  },
  {
    name: "Jilemnice",
    priest: "P. Jiří Jakoubek",
    person1: "Veronika Mejsnarová",
    person2: "Martina Urbanová",
  },
  {
    name: "Kutná Hora - Poděbrady",
    priest: "P. Dmytro Romanovský",
    person1: "Alžběta Veronika Cinerová",
    person2: "Josefína Pazderová",
  },
  {
    name: "Litomyšl",
    person1: "Nina Kysilková",
    person2: "Matyáš Juza",
  },
  {
    name: "Náchod",
    person1: "Kateřina Vydláková",
    person2: "Michal Matyska",
  },
  {
    name: "Pardubice",
    priest: "P. Piotr Antkiewicz",
    person1: "Maja Macková",
    person2: "Kateřina Dvořáková",
    social: {
      instagram: "https://www.instagram.com/vikariat_pardubice/",
      youtube: "https://www.youtube.com/@vikariatpardubice",
    },
  },
  {
    name: "Rychnov nad Kněžnou",
    priest: "P. Jan Barborka",
    person1: "Kateřina a Miloš Zahradníkovi",
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
    priest: "(jáhen) Jiří Melichar",
    person1: "David Holubec",
    person2: "Tomáš Špelda",
  },
  {
    name: "Ústí nad Orlicí",
    priest: "P. Jan Pitřinec",
    person1: "Marie Kadová",
    person2: "Kateřina Kaucová",
    person3: "doc. Jakub Šimek",
  },
  {
    name: "Žamberk",
    person1: "Majda Hejna",
    person2: "Tereza Vávrová",
    priest: "P. Jakub Brabenec",
  },
];
