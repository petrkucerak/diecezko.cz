import Container from "../layouts/container";
import ContainerTitle from "../layouts/container-title";

export default function Program({ id, className }) {
  return (
    <Container className={className} id={id}>
      <ContainerTitle className={`text-center`}>Program bude již brzy specifikován</ContainerTitle>
    </Container>
  );
}
