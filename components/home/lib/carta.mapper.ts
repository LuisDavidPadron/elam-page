import { CartaBlock, CartaDTO, Category } from "../types/carta.type";

function isRawNode(
  node: any
): node is { type: string; children?: any[]; text?: string } {
  return node && typeof node === "object" && typeof node.type === "string";
}

export function mapCarta(raw: CartaBlock): CartaDTO {
  const nodes = raw?.content?.root?.children ?? [];

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

  const media = raw.heroImage;
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
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    meta: raw.meta,
    slugLock: raw.slugLock,
    _status: raw._status,
    content: raw.content,
    heroImage: media,
    populatedAuthors: raw.populatedAuthors,
    publishedAt: raw.publishedAt,
    slug: raw.slug,
    title: raw.title,
    id: raw.id,
  };
}

export interface CartaPagination {
  docs: CartaBlock[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface CategoryPagination {
  docs: Category[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
