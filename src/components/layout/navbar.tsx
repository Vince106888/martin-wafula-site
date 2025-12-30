import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-6 z-40">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Dr. Martin Wafula
        </Link>

        <div className="flex items-center gap-5 text-sm muted">
          <Link href="/#publications" className="hover:text-foreground transition focus-ring">Publications</Link>
          <Link href="/#teaching" className="hover:text-foreground transition focus-ring">Teaching</Link>
          <Link href="/research" className="hover:text-foreground transition focus-ring">Research</Link>
          <Link href="/cv" className="hover:text-foreground transition focus-ring">CV</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
