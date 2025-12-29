"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "./hero-canvas";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex min-h-screen items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Dr. Martin Wafula
            </h1>

            <p className="text-xl text-blue-200">
              DPhil Candidate in Engineering Science · University of Oxford
            </p>

            <p className="text-lg leading-relaxed text-slate-200">
              Researcher and lecturer working at the intersection of
              communication systems, network science, information theory,
              and secure large-scale networked infrastructures.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#publications"
                className="rounded-md bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500 transition"
              >
                Publications
              </a>

              <a
                href="#teaching"
                className="rounded-md border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Teaching
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
