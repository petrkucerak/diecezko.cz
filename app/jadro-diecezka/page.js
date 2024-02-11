import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProfileCard from "../../components/layouts/profile-card";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Jádro Diecézka</ContainerTitle>
          <ContainerDescription>
            Diecézní setkání mládeže je možné zorganizovat díky dobrovolníkům,
            kteří se do jeho příprav zapojili. Patří jim díky za jejich
            obětavost a&nbsp;nasazení!
          </ContainerDescription>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center">
            {jadro.map((p) => {
              return (
                <ProfileCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  jpgPath={p.jpgPath}
                  webpPath={p.webpPath}
                  pngPath={p.pngPath}
                  altText={p.altText}
                  className={p.className}
                />
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const jadro = [
  {
    name: "Klárka Petrová",
    description:
      "Klárka je vedoucí DCM a&nbsp;stará se o&nbsp;všechny, co připravují Diecézko.",
    jpgPath: "/assets/images/jadro/petrova.jpg",
    webpPath: "/assets/images/jadro/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Klárka Kopecká",
    description:
      "Manažerka Klárka komunikuje s&nbsp;hosty, domlouvá s&nbsp;nimi detaily jejich přednášek a stará se o Bigy.",
    jpgPath: "/assets/images/jadro/klarka.jpg",
    webpPath: "/assets/images/jadro/klarka.webp",
    altText: "Profilová fotka Klárky Kopecké",
    className: "",
  },
  {
    name: "Ondra Mařík",
    description:
      "Ondra je spolu s Klárkou generálem Bigy. Stará se o zázemí nejen pro hosty ale i všechny, kteří budou na Bigy.",
    jpgPath: "/assets/images/jadro/marik.jpg",
    webpPath: "/assets/images/jadro/marik.webp",
    altText: "Profilová fotka Ondyr Maříka",
    className: "",
  },
  {
    name: "Evžen Holub",
    description: "Pan Holub drží holubí dohled nad celým Diecézkem.",
    jpgPath: "/assets/images/jadro/evzen.png",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
  {
    name: "Verča Pavlišová",
    description:
      "Pečuje o&nbsp;pohodlí našich žaludků a stará se o to, aby vše dobře vypadalo.",
    jpgPath: "/assets/images/jadro/pavlisova.jpg",
    webpPath: "/assets/images/jadro/pavlisova.webp",
    altText: "Profilová fotka Verči Pavlišové",
    className: "",
  },
  {
    name: "Matyáš Messi Majsner",
    description:
      "Matyáš má na starosti režijní program, který nás bude provázet během dopoledne ve Filharmonii.",
    altText: "Profilová fotka Matyáše Messiho Majsnera",
    jpgPath: "/assets/images/jadro/majsner.jpg",
    webpPath: "/assets/images/jadro/majsner.webp",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra se stará o kaplany, zástupce a pomáhá sytit web obsahem.",
    jpgPath: "/assets/images/jadro/reznicek.jpg",
    webpPath: "/assets/images/jadro/reznicek.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "o. Tomáš Hoffmann",
    description:
      "Tomáš je nejen ředitelem Vesmíru a&nbsp;DCM, ale hlavně duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka o. Tomáš Hoffmann",
    jpgPath: "/assets/images/jadro/hoffmann.jpg",
    webpPath: "/assets/images/jadro/hoffmann.webp",
    className: "",
  },
  {
    name: "Petr Kučera",
    description: "Petr se stará o&nbsp;diecézko.cz a&nbsp;kachní, kde může.",
    jpgPath: "/assets/images/jadro/kucera.jpg",
    webpPath: "/assets/images/jadro/kucera.webp",
    altText: "Profilová fotka Petr Kučery",
    className: "",
  },
  {
    name: "Denča Zavřelová",
    description:
      "Recepční skupinka pod vedením Denči vás při vstupu do Filharmonie označí náramkem a&nbsp;také uloží vaše kabáty a&nbsp;bundy do šatny.",
    altText: "Profilová fotka Denča Zavřelová",
    jpgPath: "/assets/images/jadro/denca.jpg",
    webpPath: "/assets/images/jadro/denca.webp",
    className: "",
  },
  {
    name: "Amálka Výborná",
    description:
      "Amálka a&nbsp;její tým v&nbsp;oranžových vestičkách vám zajistí bezpečný doprovod až na přednášku.",
    altText: "Profilová fotka Amálka Výborná",
    jpgPath: "/assets/images/jadro/vyborna.jpg",
    webpPath: "/assets/images/jadro/vyborna.webp",
    className: "",
  },
  {
    name: "Vojta Vlach",
    description:
      "Vojta je ostřílený kapelník Vesmírné kapely, která doprovodí dopolední program ve Filharmonii.",
    altText: "Profilová fotka Vojta Vlach",
    jpgPath: "/assets/images/jadro/pan-vlach.jpg",
    webpPath: "/assets/images/jadro/pan-vlach.webp",
    className: "",
  },
  {
    name: "Kuba Kučera",
    description: "Kuba má na starosti technickou stránku režie.",
    altText: "Profilová fotka Kuby Kučery",
    jpgPath: "/assets/images/jadro/bro.jpg",
    webpPath: "/assets/images/jadro/bro.webp",
    className: "",
  },
  {
    name: "Dejv z Prahee",
    description:
      "Dejv je vrchní manažer úklidové čety a&nbsp;kromě každého odpadku vyhozeného do správného koše ocení i&nbsp;každou pomocnou ruku.",
    altText: "Profilová fotka Davida z Prahee",
    jpgPath: "/assets/images/jadro/dejv.jpg",
    webpPath: "/assets/images/jadro/dejv.webp",
    className: "",
  },
];
