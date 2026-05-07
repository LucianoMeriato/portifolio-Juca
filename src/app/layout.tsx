import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luciano Meriato — Software Engineer",
  description:
    "Estudante de Engenharia de Software na FIAP. Desenvolvimento web full-stack.",
  metadataBase: new URL("https://luciano-meriato.dev"),
  openGraph: {
    title: "Luciano Meriato — Software Engineer",
    description:
      "Estudante de Engenharia de Software na FIAP. Desenvolvimento web full-stack.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
