"use client";

import { motion } from "framer-motion";
import { stackItems, journey } from "@/lib/data";
import { techIcon, journeyIcon, ArrowRight } from "./Icons";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden bg-bg px-6 py-24 md:px-10 md:py-32"
    >
      {/* Subtle grid backdrop */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12 md:gap-12 lg:gap-16">
        {/* Stack column */}
        <div id="stack-col" className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-accent"
          >
            <span className="block h-px w-8 bg-accent" />
            Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-fg md:text-5xl"
          >
            Tecnologias que utilizo
          </motion.h2>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stackItems.map((item, i) => {
              const Icon = techIcon[item.icon];
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-line-strong bg-elev transition-colors group-hover:border-accent/40">
                    <Icon size={28} />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widestplus text-fg-soft group-hover:text-fg">
                    {item.name}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          <a
            href="#contato"
            className="group mt-10 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widestplus text-accent hover:text-fg"
          >
            Ver todas as habilidades
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={12} />
            </span>
          </a>
        </div>

        {/* Journey column */}
        <div id="jornada" className="scroll-mt-24 md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-accent"
          >
            <span className="block h-px w-8 bg-accent" />
            Jornada
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-fg md:text-5xl"
          >
            Minha trajetória
          </motion.h2>

          <ol className="mt-12 space-y-7">
            {journey.map((item, i) => {
              const Icon = journeyIcon[item.icon];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: [0.22, 0.65, 0.2, 1],
                  }}
                  className="relative flex gap-5"
                >
                  {/* Icon column */}
                  <div className="relative flex flex-col items-center">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-strong bg-elev text-accent">
                      <Icon size={20} />
                    </span>
                    {i !== journey.length - 1 && (
                      <span className="mt-2 block h-full w-px flex-1 bg-gradient-to-b from-accent/40 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 pb-2 pt-0.5">
                    <p className="text-[10px] font-mono uppercase tracking-widestplus text-accent">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-[17px] font-semibold text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-fg-soft">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
