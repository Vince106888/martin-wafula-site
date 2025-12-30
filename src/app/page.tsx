import { Hero } from "@/components/hero/hero";
import { Publications } from "@/components/sections/publications";
import { Teaching } from "@/components/sections/teaching";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export const metadata = {
  title: "Dr. Martin Wafula — Communications · Information Theory · Networked Systems",
  description:
    "DPhil Candidate in Engineering Science at the University of Oxford. Researcher and lecturer focusing on communication systems, network science, information theory, and secure large-scale infrastructures.",
  openGraph: {
    title: "Dr. Martin Wafula",
    description:
      "Researcher in communication systems, network science, and information theory.",
    url: "https://your-domain.example",
    siteName: "Martin Wafula",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="min-h-screen">
        <Hero />

        {/* ABOUT */}
        <section id="about" className="py-20">
          <Container>
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-semibold">About</h2>

              <p className="mt-3 text-muted leading-relaxed">
                I'm a DPhil candidate and researcher exploring the intersection of communication systems, network science, and secure, large-scale infrastructures. I design resilient protocols, analyze network performance, and teach courses on communication systems and networks.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cv" className="btn btn-primary focus-ring">View CV</Link>
                <Link href="/research" className="btn btn-ghost border border-white/10 focus-ring">Research</Link>
                <a href="mailto:martin@example.com" className="btn btn-outline focus-ring">Contact</a>
              </div>
            </div>
          </Container>
        </section>

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
      </div>
    </>
  );
}
