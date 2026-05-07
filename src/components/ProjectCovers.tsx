/**
 * Capas dos projetos — mockups gerados em SVG, sem dependência de imagens externas.
 * Cada capa tem identidade própria que ecoa o tema do projeto.
 * Quando você tiver screenshots reais, pode substituir cada componente
 * por um <img src="/projects/xxx.jpg" /> mantendo a mesma assinatura.
 */
import * as React from "react";

type CoverProps = { className?: string };

export function PotencialCover({ className = "" }: CoverProps) {
  return (
    <svg
      viewBox="0 0 600 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="pot-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1f2e" />
          <stop offset="100%" stopColor="#0a0d14" />
        </linearGradient>
        <radialGradient id="pot-glow" cx="80%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="pot-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2536" />
          <stop offset="100%" stopColor="#151a26" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#pot-bg)" />
      <rect width="600" height="360" fill="url(#pot-glow)" />
      {/* Top bar */}
      <rect x="0" y="0" width="600" height="36" fill="rgba(0,0,0,0.35)" />
      <circle cx="20" cy="18" r="4" fill="#3a4156" />
      <circle cx="36" cy="18" r="4" fill="#3a4156" />
      <circle cx="52" cy="18" r="4" fill="#3a4156" />
      <text
        x="300"
        y="22"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        fill="#5a6378"
      >
        +potencial.com
      </text>
      {/* Hero */}
      <text
        x="40"
        y="100"
        fontFamily="Inter, sans-serif"
        fontSize="34"
        fontWeight="800"
        fill="#f2f4f8"
        letterSpacing="-1"
      >
        +potencial
      </text>
      <text
        x="40"
        y="130"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fill="#a8b0c2"
      >
        Conectando pessoas a oportunidades.
      </text>
      <rect x="40" y="150" width="100" height="32" rx="16" fill="#ff8a3d" />
      <text
        x="90"
        y="170"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#0a0d14"
      >
        Começar
      </text>
      {/* Cards */}
      <rect x="40" y="210" width="160" height="120" rx="14" fill="url(#pot-card)" />
      <rect x="56" y="226" width="40" height="40" rx="10" fill="#ff8a3d" opacity="0.18" />
      <rect x="56" y="226" width="40" height="40" rx="10" fill="none" stroke="#ff8a3d" strokeWidth="1" />
      <rect x="56" y="280" width="100" height="6" rx="3" fill="#3a4156" />
      <rect x="56" y="294" width="80" height="5" rx="2.5" fill="#2a3142" />
      <rect x="56" y="306" width="60" height="5" rx="2.5" fill="#2a3142" />
      <rect x="220" y="210" width="160" height="120" rx="14" fill="url(#pot-card)" />
      <rect x="236" y="226" width="40" height="40" rx="10" fill="#4d8cff" opacity="0.18" />
      <rect x="236" y="226" width="40" height="40" rx="10" fill="none" stroke="#4d8cff" strokeWidth="1" />
      <rect x="236" y="280" width="110" height="6" rx="3" fill="#3a4156" />
      <rect x="236" y="294" width="90" height="5" rx="2.5" fill="#2a3142" />
      <rect x="236" y="306" width="70" height="5" rx="2.5" fill="#2a3142" />
      <rect x="400" y="210" width="160" height="120" rx="14" fill="url(#pot-card)" />
      <rect x="416" y="226" width="40" height="40" rx="10" fill="#5eb3ff" opacity="0.18" />
      <rect x="416" y="226" width="40" height="40" rx="10" fill="none" stroke="#5eb3ff" strokeWidth="1" />
      <rect x="416" y="280" width="100" height="6" rx="3" fill="#3a4156" />
      <rect x="416" y="294" width="80" height="5" rx="2.5" fill="#2a3142" />
    </svg>
  );
}

export function CartorioCover({ className = "" }: CoverProps) {
  return (
    <svg
      viewBox="0 0 600 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="cart-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2030" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
        <radialGradient id="cart-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#7a92c8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="600" height="360" fill="url(#cart-bg)" />
      <rect width="600" height="360" fill="url(#cart-glow)" />
      {/* Side nav */}
      <rect x="0" y="0" width="120" height="360" fill="rgba(0,0,0,0.35)" />
      <rect x="20" y="30" width="80" height="6" rx="3" fill="#5a6378" />
      <rect x="20" y="68" width="50" height="5" rx="2.5" fill="#3a4156" />
      <rect x="20" y="84" width="60" height="5" rx="2.5" fill="#3a4156" />
      <rect x="20" y="100" width="45" height="5" rx="2.5" fill="#3a4156" />
      <rect x="20" y="116" width="70" height="5" rx="2.5" fill="#3a4156" />

      {/* Lady justice silhouette */}
      <g transform="translate(360, 50)" opacity="0.7">
        <ellipse cx="0" cy="20" rx="28" ry="32" fill="#5a6885" opacity="0.5" />
        <rect x="-50" y="50" width="100" height="180" rx="6" fill="#4a5772" opacity="0.55" />
        <line x1="-70" y1="80" x2="70" y2="80" stroke="#7a92c8" strokeWidth="2" opacity="0.7" />
        <circle cx="-70" cy="84" r="4" fill="#7a92c8" />
        <circle cx="70" cy="84" r="4" fill="#7a92c8" />
        <line x1="-70" y1="84" x2="-70" y2="120" stroke="#7a92c8" strokeWidth="1" opacity="0.5" />
        <line x1="70" y1="84" x2="70" y2="120" stroke="#7a92c8" strokeWidth="1" opacity="0.5" />
        <ellipse cx="-70" cy="125" rx="14" ry="3" fill="#7a92c8" opacity="0.5" />
        <ellipse cx="70" cy="125" rx="14" ry="3" fill="#7a92c8" opacity="0.5" />
      </g>

      {/* Title */}
      <text
        x="150"
        y="135"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="#f2f4f8"
        letterSpacing="-0.8"
      >
        Segurança jurídica
      </text>
      <text
        x="150"
        y="165"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="#f2f4f8"
        letterSpacing="-0.8"
      >
        para momentos
      </text>
      <text
        x="150"
        y="195"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="800"
        fontStyle="italic"
        fill="#7a92c8"
        letterSpacing="-0.8"
      >
        que importam.
      </text>

      <rect x="150" y="220" width="115" height="32" rx="6" fill="none" stroke="#a8b0c2" strokeWidth="1" />
      <text
        x="207"
        y="240"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill="#a8b0c2"
      >
        Saiba mais
      </text>
    </svg>
  );
}

export function FormulaECover({ className = "" }: CoverProps) {
  return (
    <svg
      viewBox="0 0 600 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="fe-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c0612" />
          <stop offset="100%" stopColor="#06080c" />
        </linearGradient>
        <radialGradient id="fe-glow" cx="30%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#5a3aff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="fe-glow2" cx="80%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="fe-stripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#5a3aff" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#fe-bg)" />
      <rect width="600" height="360" fill="url(#fe-glow)" />
      <rect width="600" height="360" fill="url(#fe-glow2)" />

      {/* Top bar */}
      <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.45)" />
      <text
        x="22"
        y="26"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#00d4ff"
        letterSpacing="2"
      >
        ABB FORMULA E
      </text>
      <text
        x="124"
        y="26"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fill="#a8b0c2"
        letterSpacing="3"
      >
        WORLD CHAMPIONSHIP
      </text>

      {/* Title block */}
      <text
        x="40"
        y="160"
        fontFamily="Inter, sans-serif"
        fontSize="56"
        fontWeight="900"
        fill="#f2f4f8"
        letterSpacing="-2"
        fontStyle="italic"
      >
        FORMULA<tspan fill="#00d4ff">&#160;E</tspan>
      </text>

      {/* Speed lines */}
      <g opacity="0.6">
        <rect x="40" y="190" width="180" height="2" fill="url(#fe-stripe)" />
        <rect x="40" y="198" width="130" height="2" fill="url(#fe-stripe)" opacity="0.6" />
        <rect x="40" y="206" width="80" height="2" fill="url(#fe-stripe)" opacity="0.4" />
      </g>

      {/* Car silhouette (stylized) */}
      <g transform="translate(360, 240)">
        <ellipse cx="80" cy="40" rx="100" ry="6" fill="#000" opacity="0.5" />
        {/* body */}
        <path
          d="M0,30 L40,18 L120,18 L160,28 L160,38 L0,38 Z"
          fill="#1a1024"
          stroke="#00d4ff"
          strokeWidth="1.2"
        />
        <path
          d="M55,18 L80,8 L110,8 L130,18 Z"
          fill="#0a0612"
          stroke="#00d4ff"
          strokeWidth="1"
        />
        <circle cx="35" cy="38" r="9" fill="#0a0612" stroke="#00d4ff" strokeWidth="1.4" />
        <circle cx="125" cy="38" r="9" fill="#0a0612" stroke="#00d4ff" strokeWidth="1.4" />
        <circle cx="35" cy="38" r="3" fill="#00d4ff" />
        <circle cx="125" cy="38" r="3" fill="#00d4ff" />
      </g>

      {/* Bottom HUD */}
      <rect x="40" y="310" width="60" height="22" rx="11" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="0.6" />
      <text
        x="70"
        y="325"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        fill="#00d4ff"
      >
        LIVE
      </text>
    </svg>
  );
}

export const projectCover = {
  potencial: PotencialCover,
  cartorio: CartorioCover,
  formulae: FormulaECover,
};
