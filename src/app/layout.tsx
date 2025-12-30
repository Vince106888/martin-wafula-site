import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Playfair_Display, Inter } from "next/font/google";
import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={clsx(
        playfair.variable,
        inter.variable,
        "scroll-smooth antialiased"
      )}
    >
      <body className="relative min-h-screen bg-background text-foreground font-body">
        {/* Skip link for keyboard users */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-50
                     rounded-md bg-foreground text-background
                     px-3 py-2 text-sm font-medium shadow"
        >
          Skip to content
        </a>

        {/* Global ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10
                     bg-[radial-gradient(circle_at_top,
                     hsl(var(--foreground)/0.06),
                     transparent_50%)]"
        />

        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main
              id="content"
              role="main"
              tabIndex={-1}
              className="flex-1 py-10 sm:py-12 lg:py-16 outline-none focus-visible:ring-0"
            >
              <Container>{children}</Container>
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
