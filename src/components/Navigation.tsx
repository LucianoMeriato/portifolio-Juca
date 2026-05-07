"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, profile } from "@/lib/data";
import { ArrowRight } from "./Icons";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((n) => n.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10">
        <a
          href="#hero"
          className="group flex items-center gap-3"
          aria-label="Início"
        >
          <Monogram />
          <span className="hidden text-[11px] font-mono uppercase tracking-widestplus text-fg-soft transition-colors group-hover:text-fg sm:inline-block">
            Luciano <span className="text-fg">Meriato</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-9">
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                data-active={isActive}
                className={`nav-link text-[11px] font-mono uppercase tracking-widestplus transition-colors ${
                  isActive ? "text-fg" : "text-fg-soft hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="group hidden items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[11px] font-mono uppercase tracking-widestplus text-fg transition-all hover:border-accent hover:text-accent md:inline-flex"
          >
            Vamos conversar
            <span className="transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1">
              <span
                className={`block h-px w-4 bg-current transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <nav className="border-t border-line bg-bg/95 px-6 py-6 backdrop-blur-xl">
              <ul className="flex flex-col gap-4">
                {navigation.map((item, i) => (
                  <li key={item.href} className="flex items-baseline gap-3">
                    <span className="text-[10px] font-mono text-fg-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      onClick={() => setOpen(false)}
                      href={item.href}
                      className="font-display text-2xl tracking-tightest text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    onClick={() => setOpen(false)}
                    href="#contato"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-[11px] font-mono uppercase tracking-widestplus text-fg"
                  >
                    Vamos conversar
                    <ArrowRight size={14} />
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Monogram() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-accent">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M3 3 V17 H10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="text-fg transition-colors group-hover:text-accent"
        />
        <path
          d="M11 17 L14.5 6 L18 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="text-fg transition-colors group-hover:text-accent"
        />
      </svg>
    </span>
  );
}
