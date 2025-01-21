import dedent from "dedent";
import type { ReactNode } from "react";

export const js = dedent;
export const css = dedent;
export const shell = dedent;
export const html = dedent;
export const astro = dedent;
export const twig = dedent;
export const elixir = dedent;
export const handlebars = dedent;

export interface LogoComponent {
  (props: { className: string }): ReactNode;
}

export interface Tile {
  title: string;
  description: string;

  Logo: LogoComponent;
  LogoDark?: LogoComponent;
}

export interface Tab {
  title: string;
  slug: string;
}

export interface Page {
  title: string;
  description: string;
  intro?: ReactNode;
  notice?: ReactNode;
}

export interface Step {
  tabs?: string[];
  title: string;
  body: ReactNode;
  code: {
    name: string;
    lang: string;
    code: string;
  };
}
