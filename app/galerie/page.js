"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import Link from "next/link";

export default function Galerie() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Galerie</ContainerTitle>
          <ContainerDescription>
            Zavzpomínej na jarní Diecézko 2024, které pro nás nafotili{" "}
            <Link
              href={`https://www.facebook.com/gorunmatous`}
              target="_blank"
              rel="external noopener nofollow"
              className="underline"
            >
              Matouš Gorun
            </Link>{" "}
            a&nbsp;
            <Link
              href={`https://www.facebook.com/jan.urban.1291`}
              target="_blank"
              rel="external noopener nofollow"
              className="underline"
            >
              Honza Urban
            </Link>
            .
          </ContainerDescription>
          <div className="w-full grid md:grid-cols-2 gap-4">
            <Link
              href="/galerie/gorun"
              className="hover:scale-105 duration-200 flex flex-col items-center justify-center w-full h-64 bg-[url('https://foto2024.diecezko.cz/foto/gorun/MG_00775.webp')] bg-center rounded-xl bg-cover"
            >
              <h2 className="text-2xl font-semibold backdrop-blur-sm p-8 rounded-xl">
                Fotky od Matouše
              </h2>
            </Link>
            <Link
              href="/galerie/urban"
              className="hover:scale-105 duration-200 flex flex-col items-center justify-center w-full h-64 bg-[url('https://foto2024.diecezko.cz/foto/urban/IMG_2390.webp')] bg-center rounded-xl bg-cover"
            >
              <h2 className="text-2xl font-semibold backdrop-blur-sm p-8 rounded-xl">
                Fotky od Honzy
              </h2>
            </Link>
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
