"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import Link from "next/link";
import { photos } from "../../components/photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
export default function Galerie() {
  const [open, setOpen] = useState(true);
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Galerie</ContainerTitle>
          <ContainerDescription>
            Zavzpomínej na podzimní Diecézko 2023, které pro nás nafotili{" "}
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
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={photos}
            />
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
