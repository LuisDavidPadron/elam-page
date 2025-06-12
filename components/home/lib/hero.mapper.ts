import type { RawHeroBlock, HeroDTO } from "../types/hero.type";

function isRawNode(
  node: any
): node is { type: string; children?: any[]; text?: string } {
  return node && typeof node === "object" && typeof node.type === "string";
}

export function mapHero(raw: RawHeroBlock): HeroDTO {
  const nodes = raw?.hero?.richText?.root?.children ?? [];

  let headline = "";
  let subheadline = "";
  let copy = "";

  for (const node of nodes) {
    if (!isRawNode(node)) continue;

    if (node.type === "heading") {
      const lines: string[] = [];
      let currentLine = "";

      for (const child of node.children ?? []) {
        if (!isRawNode(child)) continue;
        if (child.type === "text" && typeof child.text === "string") {
          currentLine += child.text;
        }
        if (child.type === "linebreak") {
          lines.push(currentLine);
          currentLine = "";
        }
      }
      if (currentLine) lines.push(currentLine);

      headline = lines[0] ?? "";
      subheadline = lines[1] ?? "";
    }

    if (node.type === "paragraph") {
      copy = (node.children ?? [])
        .filter(
          (c) => isRawNode(c) && c.type === "text" && typeof c.text === "string"
        )
        .map((t) => t.text)
        .join(" ");
    }
  }

  const media = raw.hero.media;
  const image = media
    ? {
        url: media.url,
        alt: media.alt,
        width: media.width,
        height: media.height,
        mimeType: media.mimeType,
      }
    : null;

  return {
    headline,
    subheadline,
    copy,
    image,
    slug: raw.slug,
    id: raw.id,
  };
}
