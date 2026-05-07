/**
 * Ícones SVG inline. Sem dependência externa.
 * Cada ícone respeita currentColor para herdar a cor do contexto.
 */
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const wrap = (children: React.ReactNode) =>
  function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  };

// ===== UI =====
export const ArrowRight = wrap(
  <path
    d="M4 12h16m0 0l-6-6m6 6l-6 6"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const ArrowDown = wrap(
  <path
    d="M12 4v16m0 0l-6-6m6 6l6-6"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const ArrowUpRight = wrap(
  <path
    d="M7 17L17 7m0 0H8m9 0v9"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Diamond = wrap(
  <path
    d="M12 3l4 4-4 14-4-14 4-4z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
  />
);

export const Sun = wrap(
  <>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </>
);

export const Moon = wrap(
  <path
    d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
  />
);

export const Code = wrap(
  <path
    d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Pen = wrap(
  <>
    <path
      d="M14 4l6 6-12 12H2v-6L14 4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 6.5l6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </>
);

export const Rocket = wrap(
  <>
    <path
      d="M5 19c1.5-3 4.5-6 9-9 3-2 5-2.5 7-2.5-.2 2.2-.7 4.2-2.5 7-3 4.5-6 7.5-9 9l-3-1.5L5 19z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="15" cy="9" r="1.4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5 19c-1 .5-1.5 1.5-1.5 3 1.5 0 2.5-.5 3-1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </>
);

export const Bolt = wrap(
  <path
    d="M13 3L4 14h6l-1 7 9-11h-6l1-7z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

export const Graduation = wrap(
  <>
    <path
      d="M2 9l10-5 10 5-10 5L2 9z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M22 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </>
);

export const Flag = wrap(
  <>
    <path
      d="M5 3v18M5 4l11 1-2 4 4 1-2 4-11-1V4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </>
);

export const Linkedin = wrap(
  <>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 9.5v8M7 7v.01M11 17.5v-5c0-1.5 1-2.5 2.5-2.5S16 11 16 12.5v5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </>
);

export const Github = wrap(
  <path
    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
  />
);

export const Mail = wrap(
  <>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3 7l9 6 9-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </>
);

export const Instagram = wrap(
  <>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </>
);

// ===== Tech logos (vetorizados em estilo plano monocromático com acentos) =====

export const PythonIcon = wrap(
  <>
    <path
      d="M12 2c-3 0-5 1-5 3v3h6v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-2c0-2 2-3.5 4-3.5h4c2 0 3-1 3-3V5c0-2-2-3-6-3zm-2 2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fill="#3776ab"
    />
    <path
      d="M12 22c3 0 5-1 5-3v-3h-6v-1h8c2 0 3-1.5 3-4s-1-4-3-4h-2v2c0 2-2 3.5-4 3.5H9c-2 0-3 1-3 3v4c0 2 2 3 6 3zm2-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fill="#ffd43b"
    />
  </>
);

export const JavaIcon = wrap(
  <>
    <path
      d="M9 17c-3 .5-5 1-5 2 0 1.5 4 2.5 8 2.5s8-1 8-2.5c0-.7-1.2-1.4-3-1.8"
      stroke="#5382a1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M9 14c-2 .4-3 1-3 1.6 0 1 2.5 2 6 2s6-1 6-2c0-.5-.7-1-2-1.4"
      stroke="#5382a1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M11 2c2 2 4 3 4 6 0 2-3 3-3 5 0 2 2 3 2 4M9 9c-2 1-2 3 0 4"
      stroke="#e76f00"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

export const JavaScriptIcon = wrap(
  <>
    <rect width="24" height="24" rx="4" fill="#f7df1e" />
    <text
      x="50%"
      y="62%"
      textAnchor="middle"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      fontWeight="800"
      fill="#0a0d14"
    >
      JS
    </text>
  </>
);

export const NodeIcon = wrap(
  <>
    <path
      d="M12 2.5L3 7.5v9l9 5 9-5v-9L12 2.5z"
      stroke="#3c873a"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="rgba(60,135,58,0.08)"
    />
    <text
      x="50%"
      y="63%"
      textAnchor="middle"
      fontFamily="ui-monospace, monospace"
      fontSize="6.5"
      fontWeight="800"
      fill="#3c873a"
    >
      Node
    </text>
  </>
);

export const ReactIcon = wrap(
  <>
    <circle cx="12" cy="12" r="2" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1.4" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </g>
  </>
);

export const TailwindIcon = wrap(
  <path
    d="M6 13c1-3 3-4.5 6-4.5 4.5 0 5 3 8 3 1.5 0 2.5-.7 3-2-1 3-3 4.5-6 4.5-4.5 0-5-3-8-3-1.5 0-2.5.7-3 2zm-3 5c1-3 3-4.5 6-4.5 4.5 0 5 3 8 3 1.5 0 2.5-.7 3-2-1 3-3 4.5-6 4.5-4.5 0-5-3-8-3-1.5 0-2.5.7-3 2z"
    fill="#38bdf8"
  />
);

export const SqlIcon = wrap(
  <>
    <ellipse cx="12" cy="5.5" rx="8" ry="2.5" stroke="#5eb3ff" strokeWidth="1.5" fill="none" />
    <path
      d="M4 5.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"
      stroke="#5eb3ff"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M4 11.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"
      stroke="#5eb3ff"
      strokeWidth="1.5"
      fill="none"
    />
  </>
);

export const GitIcon = wrap(
  <>
    <path
      d="M21.5 11.4l-9-9a1.5 1.5 0 0 0-2.1 0l-2 2 2.5 2.5c.5-.2 1.2-.1 1.6.3.4.4.5 1.1.3 1.6l2.4 2.4c.5-.2 1.2-.1 1.6.3a1.5 1.5 0 1 1-2.1 2.1c-.4-.4-.5-1.1-.3-1.6l-2.3-2.3v6c.4.2.7.6.7 1.1a1.5 1.5 0 1 1-2.4-1.1V9.4c-.5-.3-.8-.9-.6-1.5L7.4 5.4l-4.9 4.9a1.5 1.5 0 0 0 0 2.1l9 9a1.5 1.5 0 0 0 2.1 0l9-9a1.5 1.5 0 0 0 0-2z"
      fill="#f05033"
    />
  </>
);

export const techIcon: Record<string, React.FC<IconProps>> = {
  python: PythonIcon,
  java: JavaIcon,
  javascript: JavaScriptIcon,
  node: NodeIcon,
  react: ReactIcon,
  tailwind: TailwindIcon,
  sql: SqlIcon,
  git: GitIcon,
};

export const featureIcon: Record<string, React.FC<IconProps>> = {
  code: Code,
  design: Pen,
  product: Rocket,
  growth: Bolt,
};

export const journeyIcon: Record<string, React.FC<IconProps>> = {
  graduation: Graduation,
  code: Code,
  flag: Flag,
};
