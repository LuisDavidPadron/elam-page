import { CartaBlock, CartaDTO } from "../types/carta.type";

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

// {
//     "docs": [
//         {
//             "createdAt": "2025-06-12T05:49:23.702Z",
//             "updatedAt": "2025-06-12T05:51:40.970Z",
//             "meta": {},
//             "slugLock": true,
//             "_status": "published",
//             "content": {
//                 "root": {
//                     "children": [
//                         {
//                             "children": [
//                                 {
//                                     "detail": 0,
//                                     "format": 0,
//                                     "mode": "normal",
//                                     "style": "",
//                                     "text": "Hamburguesa con 300gramos de carne una delicia total",
//                                     "type": "text",
//                                     "version": 1
//                                 }
//                             ],
//                             "direction": "ltr",
//                             "format": "",
//                             "indent": 0,
//                             "type": "paragraph",
//                             "version": 1,
//                             "textFormat": 0,
//                             "textStyle": ""
//                         }
//                     ],
//                     "direction": "ltr",
//                     "format": "",
//                     "indent": 0,
//                     "type": "root",
//                     "version": 1
//                 }
//             },
//             "heroImage": {
//                 "createdAt": "2025-06-12T05:50:57.126Z",
//                 "updatedAt": "2025-06-12T05:50:57.126Z",
//                 "alt": "Deluxe",
//                 "filename": "deluxe-1.jpeg",
//                 "mimeType": "image/jpeg",
//                 "filesize": 576835,
//                 "width": 2296,
//                 "height": 4080,
//                 "focalX": 50,
//                 "focalY": 50,
//                 "sizes": {
//                     "thumbnail": {
//                         "width": 400,
//                         "height": 300,
//                         "mimeType": "image/jpeg",
//                         "filesize": 27073,
//                         "filename": "deluxe-1-400x300.jpg",
//                         "url": "/api/media/file/deluxe-1-400x300.jpg"
//                     },
//                     "card": {
//                         "width": 768,
//                         "height": 1024,
//                         "mimeType": "image/jpeg",
//                         "filesize": 116753,
//                         "filename": "deluxe-1-768x1024.jpg",
//                         "url": "/api/media/file/deluxe-1-768x1024.jpg"
//                     }
//                 },
//                 "id": "684a6ac1700e28e66d8e7ac8",
//                 "url": "/api/media/file/deluxe-1.jpeg",
//                 "thumbnailURL": "/api/media/file/deluxe-1-400x300.jpg"
//             },
//             "populatedAuthors": [],
//             "publishedAt": "2025-06-12T05:51:40.969Z",
//             "slug": "hamburguesa-deluxe",
//             "title": "Hamburguesa Deluxe",
//             "id": "684a6a63ea32989a70dcd604"
//         }
//     ],
//     "totalDocs": 1,
//     "limit": 3,
//     "totalPages": 1,
//     "page": 1,
//     "pagingCounter": 1,
//     "hasPrevPage": false,
//     "hasNextPage": false,
//     "prevPage": null,
//     "nextPage": null
// }
