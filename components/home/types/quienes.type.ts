export interface QuienesSomosBlock {
  createdAt: string;
  updatedAt: string;
  hero: {
    type: string;
    richText: {
      root: {
        children: RawNode[];
        direction: string;
        format: string;
        indent: number;
        type: string;
        version: number;
      };
    };
    links: unknown[];
    media: RawMedia | null;
  };
  layout: MediaBlock[];
  meta: {
    title: string;
  };
  slugLock: boolean;
  _status: string;
  publishedAt: string;
  slug: string;
  title: string;
  id: string;
}

export interface RawNode {
  children?: RawNode[];
  direction?: string;
  format?: string;
  indent?: number;
  type: "heading" | "paragraph" | "linebreak" | "text";
  version?: number;
  tag?: "h1" | "h2" | "h3";
  text?: string;
  detail?: number;
  style?: string;
  mode?: string;
  textFormat?: number;
  textStyle?: string;
}

export interface MediaBlock {
  blockType: "mediaBlock";
  media: RawMedia;
  id: string;
  blockName?: string;
}

export interface RawMedia {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX?: number;
  focalY?: number;
  sizes: {
    thumbnail?: MediaSize;
    card?: MediaSize;
  };
  id: string;
  url: string;
  thumbnailURL?: string;
}

export interface MediaSize {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}
