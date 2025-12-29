import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Header backdrop */}
      <div className="bg-background/70 backdrop-blur-xl">
        <Container>
          {/* Glass wrapper */}
          <div className="my-4 rounded-2xl border border-border/60 bg-background/80 shadow-sm">
            <div className="flex h-20 items-center justify-between px-8">
              {/* Brand */}
              <Link
                href="/"
                className="font-heading text-xl tracking-tight hover:opacity-80 transition"
              >
                Dr. Martin Wafula
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-10 text-sm text-muted-foreground">
                <Link
                  href="/#publications"
                  className="hover:text-foreground transition"
                >
                  Publications
                </Link>
                <Link
                  href="/#teaching"
                  className="hover:text-foreground transition"
                >
                  Teaching
                </Link>
                <Link
                  href="/research"
                  className="hover:text-foreground transition"
                >
                  Research
                </Link>
                <Link
                  href="/cv"
                  className="hover:text-foreground transition"
                >
                  CV
                </Link>

                <ThemeToggle />
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
