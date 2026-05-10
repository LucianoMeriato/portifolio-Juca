/**
 * Capas dos projetos — screenshots reais dos sites em produção.
 * Imagens em /public/projects/{id}.jpg.
 *
 * Para atualizar uma capa, basta substituir o arquivo correspondente.
 */
import * as React from "react";

type CoverProps = { className?: string };

function makeCover(src: string, alt: string) {
  return function Cover({ className = "" }: CoverProps) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={className}
        style={{ objectFit: "cover", objectPosition: "top center" }}
      />
    );
  };
}

export const PotencialCover = makeCover(
  "/projects/potencial.jpg",
  "Preview do site +Potencial"
);
export const CartorioCover = makeCover(
  "/projects/cartorio.jpg",
  "Preview do site do 1º Ofício de Patrocínio"
);
export const FormulaECover = makeCover(
  "/projects/formulae.jpg",
  "Preview do site Formula E"
);

export const projectCover = {
  potencial: PotencialCover,
  cartorio: CartorioCover,
  formulae: FormulaECover,
};
