import Container from "../layouts/container";
import ContainerTitle from "../layouts/container-title";

export default function SpolecenstviInfo({ id, className }) {
  return (
    <Container className={className} id={id}>
      <ContainerTitle className={`text-center`}>
        Společenství budou brzy specifikována
      </ContainerTitle>
    </Container>
  );
}
