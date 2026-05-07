"use client";

import { motion } from "framer-motion";
import { contact, profile } from "@/lib/data";
import { Linkedin, Github, Mail, Instagram, ArrowUpRight, Code } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative w-full overflow-hidden bg-bg px-6 pb-10 pt-24 md:px-10 md:pb-12 md:pt-32"
    >
      {/* Sutil glow azul radial — funciona em ambos os temas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(77,140,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widestplus text-accent"
        >
          <span className="block h-px w-8 bg-accent" />
          Contato
        </motion.div>

        <div className="mb-12 grid items-end gap-8 md:grid-cols-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 0.65, 0.2, 1] }}
            className="font-display text-5xl font-bold leading-[0.98] tracking-tightest text-fg md:col-span-7 md:text-6xl lg:text-[5rem]"
          >
            Vamos conversar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[15px] leading-relaxed text-fg-soft md:col-span-5 md:text-base"
          >
            Disponível para estágio, trainee ou júnior em desenvolvimento web. São Paulo — presencial ou remoto.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <ContactCard
            label="LinkedIn"
            handle={contact.linkedinHandle}
            href={contact.linkedin}
            Icon={Linkedin}
          />
          <ContactCard
            label="GitHub"
            handle={contact.githubHandle}
            href={contact.github}
            Icon={Github}
          />
          <ContactCard
            label="E-mail"
            handle={contact.email}
            href={`mailto:${contact.email}`}
            Icon={Mail}
          />
          <ContactCard
            label="Instagram"
            handle={contact.instagramHandle}
            href={contact.instagram}
            Icon={Instagram}
          />
        </div>

        <footer className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-[10px] font-mono uppercase tracking-widestplus text-fg-mute">
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widestplus text-fg-mute">
            Construído com Next.js, React e Tailwind
            <span className="text-accent">
              <Code size={14} />
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  handle,
  href,
  Icon,
}: {
  label: string;
  handle: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;
}) {
  const isExternal = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-card/40 px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line-strong bg-elev text-fg transition-colors group-hover:border-accent group-hover:text-accent">
        <Icon size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-fg">{label}</p>
        <p className="truncate text-[12px] text-fg-mute">{handle}</p>
      </div>
      <span className="text-fg-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
        <ArrowUpRight size={16} />
      </span>
    </motion.a>
  );
}
