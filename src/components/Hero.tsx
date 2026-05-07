"use client";

import { motion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";
import { profile } from "@/lib/data";
import { ArrowRight, ArrowDown, Diamond } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-bg pt-20 md:pt-24"
    >
      {/* Vertical SCROLL on left edge (desktop) */}
      <div className="pointer-events-none absolute bottom-8 left-6 z-30 hidden lg:block">
        <span className="block rotate-180 text-[10px] font-mono uppercase tracking-widestplus text-fg-mute [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="mx-auto mt-2 block h-12 w-px overflow-hidden bg-line-strong">
          <span className="block h-full bg-accent animate-scrollLine" />
        </span>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] grid-cols-1 items-stretch gap-0 px-6 md:grid-cols-12 md:px-10 lg:pl-20">
        {/* LEFT: text */}
        <div className="z-20 flex flex-col justify-center py-16 md:col-span-5 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.65, 0.2, 1] }}
          >
            <div className="mb-8 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-fg-soft">
              <span>Software Engineer</span>
              <Diamond size={10} className="text-accent" />
            </div>

            <h1 className="font-display text-[clamp(3.5rem,8.5vw,6.5rem)] font-extrabold leading-[0.92] tracking-tightest text-fg">
              Luciano
              <br />
              Meriato
            </h1>

            <p className="mt-8 max-w-md font-display text-2xl font-semibold leading-[1.18] tracking-tight text-fg md:text-3xl">
              <em className="not-italic text-accent">{profile.highlights[0]}</em>
              .{" "}
              <em className="not-italic text-accent">{profile.highlights[1]}</em>
              .{" "}
              <em className="not-italic text-accent">{profile.highlights[2]}</em>
              .
            </p>

            <p className="mt-6 max-w-md text-base leading-relaxed text-fg-soft md:text-[17px]">
              {profile.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3.5 text-[11px] font-mono uppercase tracking-widestplus text-bg transition-all hover:bg-accent hover:text-fg"
              >
                Ver projetos
                <span className="transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={14} />
                </span>
              </a>
              <a
                href="#sobre"
                className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widestplus text-fg-soft hover:text-fg"
              >
                Saiba mais
                <span className="transition-transform group-hover:translate-y-0.5">
                  <ArrowDown size={14} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: portrait + dissolution */}
        <div className="relative md:col-span-7">
          {/* Estende a foto para fora do max-width até a borda do viewport */}
          <div className="absolute inset-y-0 left-0 right-[-50vw] md:left-[-2rem] md:right-[-50vw]">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute inset-x-0 bottom-0 z-20"
      >
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-6 pb-6 md:px-10">
          <div className="flex flex-wrap items-center gap-5 text-[10px] font-mono uppercase tracking-widestplus text-fg-mute">
            <span className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(77,140,255,0.85)] animate-pulseDot" />
              Disponível para oportunidades
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-fg-mute sm:block" />
            <span className="hidden sm:inline">São Paulo, BR</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
