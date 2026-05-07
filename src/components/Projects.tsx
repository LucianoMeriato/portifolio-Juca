"use client";

import { motion } from "framer-motion";
import { projects, contact } from "@/lib/data";
import { projectCover } from "./ProjectCovers";
import { ArrowRight } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative w-full bg-bg px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-accent"
        >
          <span className="block h-px w-8 bg-accent" />
          Projetos
        </motion.div>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-fg md:text-5xl lg:text-[3.4rem]"
          >
            Trabalhos recentes
          </motion.h2>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widestplus text-fg-soft hover:text-fg"
          >
            Ver no GitHub
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-6">
          {projects.map((p, i) => {
            const Cover = projectCover[p.cover];
            return (
              <motion.a
                key={p.id}
                href={p.href || contact.github}
                target={p.href || contact.github ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 0.65, 0.2, 1],
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card/40 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              >
                {/* Cover */}
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Cover className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
                      {p.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widestplus text-fg-mute">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-fg-soft">
                    {p.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 2).map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line-strong px-2.5 py-1 text-[10px] font-mono text-fg-soft"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widestplus text-fg-soft transition-colors group-hover:text-accent">
                      Ver projeto
                      <span className="transition-transform group-hover:translate-x-1">
                        <ArrowRight size={12} />
                      </span>
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
