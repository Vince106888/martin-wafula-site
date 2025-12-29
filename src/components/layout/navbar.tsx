import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Dr. Martin Wafula
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/#publications">Publications</Link>
          <Link href="/#teaching">Teaching</Link>
          <Link href="/research">Research</Link>
          <Link href="/cv">CV</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
