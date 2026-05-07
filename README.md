# Luciano Meriato — Portfolio

Portfólio pessoal. Hero com retrato em layout de duas colunas, foto à direita
sobre code rain, demais seções em dark com cards visuais para projetos, stack
e jornada.

---

## Stack técnica

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** — microinterações
- **Canvas 2D** — chuva de código atmosférica
- Fontes via `next/font/google`: **Inter** + **JetBrains Mono**

`npm install && npm run dev` e o site sobe.

---

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start
```

---

## Estrutura

```
.
├── public/
│   ├── favicon.svg
│   ├── me.jpg                   ← foto principal (PNG transparente também ok)
│   └── me.jpg.README.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroPortrait.tsx
│   │   ├── CodeRain.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCovers.tsx
│   │   ├── Stack.tsx
│   │   ├── Contact.tsx
│   │   └── Icons.tsx
│   └── lib/
│       └── data.ts              ← TODO O CONTEÚDO EDITÁVEL
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Onde editar conteúdo

Tudo o que é texto, projeto, link de contato ou item de jornada vive em **um
único arquivo**:

```
src/lib/data.ts
```

- `profile` — nome, papel, headline, subhead, parágrafos do "Sobre"
- `navigation` — itens da nav
- `features` — os 4 cards do "Sobre"
- `projects` — lista dos projetos exibidos
- `stackItems` — tecnologias com ícone (vetorizadas em `Icons.tsx`)
- `journey` — itens da timeline
- `contact` — e-mail, LinkedIn, GitHub, Instagram

---

## Foto

Salve a foto em:

```
/public/me.jpg
```

PNG com fundo transparente também funciona — o code rain aparece atrás nas
áreas transparentes. Aspect ratio recomendado: 2:3 (vertical).

---

## Customizações rápidas

| Quero mudar...              | Vai em...                                              |
| --------------------------- | ------------------------------------------------------ |
| Cor de destaque             | `globals.css` → `--accent`                             |
| Headline do hero            | `data.ts` → `profile.highlights[]`                     |
| Adicionar projeto           | `data.ts` → `projects[]` + capa em `ProjectCovers`     |
| Tecnologia da stack         | `data.ts` → `stackItems[]` + ícone em `Icons.tsx`      |
| Item da timeline            | `data.ts` → `journey[]`                                |
| Contatos                    | `data.ts` → `contact`                                  |
| Densidade da chuva          | props de `<CodeRain />` em `HeroPortrait.tsx`          |

---

Construído com Next.js, React e Tailwind.
