"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import Link from "next/link";
import Gallery from "react-photo-gallery-next";
import { useCallback, useState } from "react";
import { photos } from "../../components/photos";
export default function Galerie() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          </ContainerDescription>
          <Gallery photos={photos} margin={2} onClick={openLightbox} />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
