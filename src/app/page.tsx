import { Hero } from "@/components/hero/hero";
import { Publications } from "@/components/sections/publications";
import { Teaching } from "@/components/sections/teaching";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* PUBLICATIONS */}
      <section id="publications" className="py-28 bg-muted/40">
        <Container>
          <Publications />
        </Container>
      </section>

      {/* TEACHING */}
      <section id="teaching" className="py-28">
        <Container>
          <Teaching />
        </Container>
      </section>
    </>
  );
}
