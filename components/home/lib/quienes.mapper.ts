import { QuienesSomosBlock } from "../types/quienes.type";

function isRawNode(
  node: any
): node is { type: string; children?: any[]; text?: string } {
  return node && typeof node === "object" && typeof node.type === "string";
}

export interface QuienesSomosDTO {
  headline: string;
  paragraphs: string[];
  images: {
    url: string;
    alt: string;
    width: number;
    height: number;
    mimeType: string;
    thumbnailURL?: string;
  }[];
  slug: string;
  id: string;
}

export function mapQuienesSomos(raw: QuienesSomosBlock): QuienesSomosDTO {
  const nodes = raw?.hero?.richText?.root?.children ?? [];

  let headline = "";
  const paragraphs: string[] = [];

  for (const node of nodes) {
    if (!isRawNode(node)) continue;

    if (node.type === "heading") {
      // Concatenar todos los textos del heading
      headline = (node.children ?? [])
        .filter(
          (c) => isRawNode(c) && c.type === "text" && typeof c.text === "string"
        )
        .map((t) => t.text)
        .join(" ");
    }

    if (node.type === "paragraph") {
      const text = (node.children ?? [])
        .filter(
          (c) => isRawNode(c) && c.type === "text" && typeof c.text === "string"
        )
        .map((t) => t.text)
        .join(" ");
      if (text) paragraphs.push(text);
    }
  }

  // Mapear imágenes desde el layout
  const images =
    raw.layout
      ?.filter((block) => block.blockType === "mediaBlock" && block.media)
      .map((block: any) => ({
        url: block.media.url,
        alt: block.media.alt,
        width: block.media.width,
        height: block.media.height,
        mimeType: block.media.mimeType,
        thumbnailURL: block.media.thumbnailURL,
      })) ?? [];

  return {
    headline,
    paragraphs,
    images,
    slug: raw.slug,
    id: raw.id,
  };
}
