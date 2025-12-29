import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
        {/* Global ambient background — subtle, non-distracting */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10
                     bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_48%)]"
        />

        <Providers>
          {/* Application Shell */}
          <div className="flex min-h-screen flex-col">
            <Header />

            <main
              id="content"
              role="main"
              tabIndex={-1}
              className="flex-1 outline-none focus-visible:ring-0"
            >
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
