import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
import SwappingGallery from "../../components/swapping-gallery";
export default async function VeKa() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>VeKa</ContainerTitle>
          <ContainerDescription>
            Jsme společenství mladých křesťanů pocházejících převážně z
            královéhradecké diecéze. Svou víru a radost ze života chceme
            předávat pomocí hudby. Pořádáme koncerty, doprovázíme mše svaté a
            různá setkání mládeže. Naším domovem je{" "}
            <Link href="/dczm-vesmir" className="underline">
              Diecézní centrum života mládeže Vesmír
            </Link>{" "}
            v Deštném v Orlických horách.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/veka_uvodka.jpg"
            webpPath="/assets/images/spolecenstvi/veka_uvodka.webp"
            altText="Vesmírná kapela na koncertě"
            className="w-full my-2"
          />
          <ContainerParagraph>
            VeKa vznikla v roce 2000 a navazuje na tradici diecézních kapel. Od
            té doby kapelou prošly přes dvě stovky členů tvořících několik
            generací, které dohromady vydaly 6 alb. Naše - v pořadí již pátá -
            generace působí od roku 2019. Natočili jsme tři videoklipy,
            doprovodili čtyři Diecézní setkání mládeže a nespočet mší v různých
            farnostech.
          </ContainerParagraph>
          <iframe
            className="rounded-xl my-2"
            src="https://open.spotify.com/embed/artist/4evTGARQ8TRDKnqbxXSvNd?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <ContainerParagraph>
            Za náš největší úspěch považujeme hraní na loňském{" "}
            <Link
              href="https://youtube.com/playlist?list=PLzNJpFpLWRj54MxPEcW392YvXM9bcyg3P&si=SY-qWAF4jl_Lu8T3"
              target="_blank"
              rel="external"
              className="underline"
            >
              Celostátním setkání mládeže
            </Link>{" "}
            včetně jeho přípravného týdne. Doufáme, že si náš hudební doprovod
            užijete!
          </ContainerParagraph>
          <SwappingGallery images={gallery} />
          <ContainerH2>Sledujte nás na:</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi className="mt-2">
              <Link
                href={`https://open.spotify.com/artist/4evTGARQ8TRDKnqbxXSvNd?si=fkpi9RTlQRKin5zNI9sDyg`}
                target="_blank"
                rel="external"
                title="Spotify"
              >
                <IconBrandSpotify className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://facebook.com/vesmirnakapela`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/vesmirna_kapela/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/vesmirnakapela`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`http://vesmirnakapela.jednoduse.cz/`}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
            </ContainerLi>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const gallery = [
  {
    path: "/assets/images/spolecenstvi/veka-atributy.jpeg",
    alt: "Vesmírná kapela s atributy"
  },
  {
    path: "/assets/images/spolecenstvi/veka_CSM.jpg",
    alt: "Vesmírná Kapela na CSM"
  },
  {
    path: "/assets/images/spolecenstvi/veka_draci.jpeg",
    alt: "Vesmírná kapela pouštějící draky"
  },
  {
    path: "/assets/images/spolecenstvi/veka_kapela.jpeg",
    alt: "Část Vesmírné Kapely v parku"
  },
  {
    path: "/assets/images/spolecenstvi/veka_lasergame.jpeg",
    alt: "Vesmírná kapela na lasergame"
  },
  {
    path: "/assets/images/spolecenstvi/veka_sbor.jpeg",
    alt: "Sbor Vesmírné kapely"
  },
  {
    path: "/assets/images/spolecenstvi/veka_kabely.jpg",
    alt: "Vesmírní kabeláž"
  },
  {
    path: "/assets/images/spolecenstvi/veka_kur.jpg",
    alt: "Vesmírná kapela na kůru"
  }
];
