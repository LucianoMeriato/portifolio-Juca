// =====================================================
//  Conteúdo do portfólio.
//  Edite este arquivo para atualizar textos, projetos,
//  habilidades, jornada e contatos.
// =====================================================

export const profile = {
  name: "Luciano Meriato",
  fullName: "Luciano Henrique Meriato Junior",
  role: "Software Engineer",
  location: "São Paulo — Brasil",
  /** Frases destacadas no hero (cada palavra em accent). */
  highlights: ["engenharia", "design", "produto"],
  subheadline:
    "Estudante de Engenharia de Software na FIAP. Foco em desenvolvimento web full-stack.",
  about: {
    kicker: "Sobre",
    title: "Software engineer em formação, com olhar de produto e design.",
    body: [
      "Estudo Engenharia de Software na FIAP (2024–2027) e moro em São Paulo. Trabalho com desenvolvimento web full-stack, com base em Python, Java, JavaScript, Node.js e React.",
      "Tenho interesse em produto e UI/UX além da parte técnica. Estou em busca da primeira oportunidade profissional na área — estágio, trainee ou júnior.",
    ],
  },
};

export const navigation = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contato", href: "#contato" },
];

// -------- Sobre — feature cards --------
export type Feature = {
  id: string;
  icon: "code" | "design" | "product" | "growth";
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    id: "code",
    icon: "code",
    title: "Código limpo",
    body: "Código legível, organizado e fácil de manter. Componentes reutilizáveis e separação de responsabilidades.",
  },
  {
    id: "design",
    icon: "design",
    title: "Design",
    body: "Atenção a tipografia, espaçamento e responsividade. UI/UX como parte do trabalho, não detalhe.",
  },
  {
    id: "product",
    icon: "product",
    title: "Produto",
    body: "Penso no problema antes de implementar. Foco em entregar a solução certa, não só a tela.",
  },
  {
    id: "growth",
    icon: "growth",
    title: "Aprendizado",
    body: "Estudo contínuo de novas ferramentas, práticas e tecnologias. Curiosidade técnica.",
  },
];

// -------- Projetos --------
export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  href?: string;
  cover: "potencial" | "cartorio" | "formulae";
};

export const projects: Project[] = [
  {
    id: "potencial",
    index: "01",
    name: "+Potencial",
    category: "Plataforma educacional",
    year: "2025",
    description:
      "Site para plataforma de preparação para ENEM e vestibulares. Layout editorial com seções de metodologia, professores e depoimentos.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    cover: "potencial",
    href: "https://www.maispotencial.com",
  },
  {
    id: "cartorio",
    index: "02",
    name: "1º Ofício de Patrocínio",
    category: "Site institucional",
    year: "2024",
    description:
      "Site institucional para cartório de notas. Apresentação dos serviços — escrituras, procurações, reconhecimento de firmas e atos digitais.",
    stack: ["React", "Tailwind", "Vite"],
    cover: "cartorio",
    href: "https://1oficiodepatrocinio.vercel.app/",
  },
  {
    id: "formulae",
    index: "03",
    name: "Formula E",
    category: "Aplicação React",
    year: "2025",
    description:
      "Site sobre o campeonato mundial de Fórmula E. Múltiplas páginas, navegação responsiva e estética alinhada à categoria.",
    stack: ["React", "JavaScript", "Vite"],
    cover: "formulae",
    href: "https://formula-e-react.vercel.app/",
  },
];

// -------- Stack --------
export type StackItem = {
  name: string;
  icon:
    | "python"
    | "java"
    | "javascript"
    | "node"
    | "react"
    | "tailwind"
    | "sql"
    | "git";
};

export const stackItems: StackItem[] = [
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "node" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "SQL", icon: "sql" },
  { name: "Git", icon: "git" },
];

export const softSkills = [
  "Pensamento analítico",
  "Resolução de problemas",
  "Comunicação",
  "Trabalho em equipe",
  "Aprendizado rápido",
  "Atenção ao detalhe",
  "Organização",
  "Proatividade",
];

// -------- Jornada --------
export type JourneyItem = {
  period: string;
  title: string;
  body: string;
  icon: "graduation" | "code" | "flag";
};

export const journey: JourneyItem[] = [
  {
    period: "2024 – 2027",
    title: "Engenharia de Software — FIAP",
    body: "Curso de Engenharia de Software na FIAP. Algoritmos, estruturas de dados, banco de dados, arquitetura e boas práticas de desenvolvimento.",
    icon: "graduation",
  },
  {
    period: "2024 – hoje",
    title: "Projetos pessoais",
    body: "Desenvolvimento de projetos próprios para aplicar o conteúdo do curso e explorar novas ferramentas. React, Next.js, Tailwind e Node.js.",
    icon: "code",
  },
  {
    period: "Próximo passo",
    title: "Primeira experiência profissional",
    body: "Procurando estágio ou trainee em desenvolvimento web. Disponível em São Paulo, presencial ou remoto.",
    icon: "flag",
  },
];

// -------- Contato --------
export const contact = {
  email: "meriatoluciano@hotmail.com",
  linkedin: "https://www.linkedin.com/in/luciano-meriato/",
  linkedinHandle: "/luciano-meriato",
  github: "https://github.com/LucianoMeriato",
  githubHandle: "/LucianoMeriato",
  instagram: "https://instagram.com/eng.luuu",
  instagramHandle: "@eng.luuu",
};
