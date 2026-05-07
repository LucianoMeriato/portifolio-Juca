"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CodeRain from "./CodeRain";

/**
 * HeroPortrait — versão estática.
 *
 *  - Foto retrato (PNG sem fundo é suportado)
 *  - Code rain como atmosfera atrás
 *  - Vinhetas para suavizar a junção com a coluna de texto
 *  - Sempre escura (mesmo no tema claro), para virar uma "ilha"
 *    deliberada à direita do hero — como um stage cinematográfico.
 *
 *  Sem efeito de cursor / reveal radial.
 */
export default function HeroPortrait() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: "#06080c", color: "#f2f4f8" }}
    >
      {/* Code rain — atmosfera */}
      <div className="absolute inset-0">
        <CodeRain
          density={0.95}
          opacity={0.55}
          speed={1}
          color="rgba(122, 166, 255, OPACITY)"
          highlight="rgba(220, 235, 255, OPACITY)"
          fadeColor="rgba(6, 8, 12, 0.20)"
        />
      </div>

      {/* Vinheta radial — escurece os cantos pra dar profundidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 100% at 35% 50%, rgba(6,8,12,0) 0%, rgba(6,8,12,0.45) 70%, rgba(6,8,12,0.92) 100%)",
        }}
      />

      {/* Borda esquerda — fade para integrar com a coluna de texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32"
        style={{
          background:
            "linear-gradient(to right, #06080c 0%, rgba(6,8,12,0.6) 50%, transparent 100%)",
        }}
      />

      {/* Photo — usa flex container para centralizar verticalmente
          mesmo se a altura disponível variar entre viewports */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 0.65, 0.2, 1] }}
          className="relative ml-4 md:ml-0"
          style={{
            // Largura prudente: nunca minúsculo, nunca enorme.
            width: "min(36vw, 460px)",
            // Aspect ratio coerente com a foto (1024x1536)
            aspectRatio: "2 / 3",
            // Garante que a foto nunca exceda a altura visível do hero
            maxHeight: "calc(100svh - 10rem)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me.jpg"
            alt="Luciano Meriato"
            draggable={false}
            onError={() => setImgFailed(true)}
            className="absolute inset-0 h-full w-full object-contain object-bottom"
            style={{
              filter: "saturate(1.05) contrast(1.04)",
            }}
          />
          {imgFailed && (
            <div className="absolute inset-0 -z-10">
              <FallbackPortrait />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function FallbackPortrait() {
  return (
    <svg
      viewBox="0 0 800 1200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="fb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2433" />
          <stop offset="100%" stopColor="#0a0d14" />
        </linearGradient>
      </defs>
      <rect width="800" height="1200" fill="url(#fb-bg)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="rgba(245,246,247,0.45)"
        fontFamily="ui-monospace, monospace"
        fontSize="14"
        letterSpacing="2"
      >
        coloque sua foto em /public/me.jpg
      </text>
    </svg>
  );
}
