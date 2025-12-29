import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t mt-32 py-12 text-sm text-muted-foreground">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p>
            © {new Date().getFullYear()} Dr. Martin Wafula
          </p>

          <p>
            Communications · Information Theory · Networked Systems
          </p>
        </div>
      </Container>
    </footer>
  );
}
