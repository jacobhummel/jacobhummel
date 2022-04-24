import Container from "components/Container";
import Experience from "components/Experience";
import Feature from "components/Feature";
import Footer from "components/Footer";
import Hero from "components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Experience />
      <Feature />
      <Footer />
    </Container>
  );
}
