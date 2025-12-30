"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "./hero-canvas";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-[rgba(2,6,23,0.64)] backdrop-blur-sm" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex min-h-screen items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2,0.8,0.2,1] }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="heading-gradient">Dr. Martin Wafula</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              DPhil Candidate in Engineering Science · University of Oxford
            </p>

            <p className="text-base leading-relaxed muted">
              Researcher and lecturer at the intersection of communication
              systems, network science, information theory, and secure
              large-scale networked infrastructures.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#publications" className="btn btn-primary focus-ring">
                Publications
              </a>

              <a href="#teaching" className="btn btn-ghost border border-white/10 focus-ring">
                Teaching
              </a>
            </div>

            <div className="mt-6 text-sm muted">
              <span className="inline-block mr-3">✨</span>
              Microinteractions, animated gradients and subtle motion aim to
              create a modern intelligent experience.
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
