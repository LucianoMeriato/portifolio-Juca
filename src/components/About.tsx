"use client";

import { motion } from "framer-motion";
import { features, profile } from "@/lib/data";
import { featureIcon } from "./Icons";

export default function About() {
  return (
    <section id="sobre" className="relative w-full bg-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-accent"
        >
          <span className="block h-px w-8 bg-accent" />
          {profile.about.kicker}
        </motion.div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6"
          >
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-fg text-balance md:text-5xl lg:text-[3.4rem]">
              {profile.about.title}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg-soft md:text-base">
              {profile.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = featureIcon[f.icon];
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: [0.22, 0.65, 0.2, 1],
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-card/50 p-6 transition-all hover:border-accent/40 hover:bg-card"
                  >
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                    />
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-elev text-accent transition-colors group-hover:border-accent/40">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-fg md:text-[17px]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-soft">
                      {f.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
