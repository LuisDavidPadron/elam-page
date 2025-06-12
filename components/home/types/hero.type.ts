// hero.types.ts
export interface RawHeroBlock {
  hero: {
    richText: {
      root: {
        children: RawNode[];
      };
    };
    media?: RawMedia;
    links?: unknown[];
  };
  slug: string;
  title: string;
  id: string;
}

interface RawNode {
  type:
    | "heading"
    | "paragraph"
    | "linebreak"
    | "text"
    | "list"
    | "list-item"
    | "image";
  children?: RawNode[];
  text?: string; // present on leaf nodes
  tag?: "h1" | "h2" | "h3";
}

interface RawMedia {
  alt: string;
  url: string;
  width: number;
  height: number;
  mimeType: string;
}

/** What the component really needs */
export interface HeroDTO {
  headline: string; // “Tu Cerveza, Tu Ritmo”
  subheadline?: string; // “Descubre el Autoservicio…”
  copy?: string; // the paragraph text
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    mimeType: string;
  } | null;
  slug: string;
  id: string;
}
