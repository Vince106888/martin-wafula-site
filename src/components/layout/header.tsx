import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md h-28">
      <Container>
        <div className="surface flex items-center justify-between h-full px-6 py-6 rounded-2xl shadow-lg">
          {/* Brand */}
          <Link
            href="/"
            className="header-brand text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Dr. Martin Wafula
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Primary"
            className="flex items-center gap-6 text-sm sm:gap-8 whitespace-nowrap"
          >
            <Link href="/#publications" className="nav-pill focus-ring px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              Publications
            </Link>
            <Link href="/#teaching" className="nav-pill focus-ring px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              Teaching
            </Link>
            <Link href="/research" className="nav-pill focus-ring px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              Research
            </Link>
            <Link href="/cv" className="nav-pill focus-ring px-3 py-2 rounded-md hidden sm:inline-flex hover:bg-gray-100 dark:hover:bg-gray-700">
              CV
            </Link>

            {/* Theme toggle isolated */}
            <div className="ml-4 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
