import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-sm text-muted-foreground flex-shrink-0">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
          <p>
            © {new Date().getFullYear()} Dr. Martin Wafula
          </p>

          <p className="text-center md:text-right">
            Communications · Information Theory · Networked Systems
          </p>
        </div>
      </Container>
    </footer>
  );
}
