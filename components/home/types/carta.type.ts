export interface CartaMedia {
  createdAt?: string;
  updatedAt?: string;
  alt?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  focalX?: number;
  focalY?: number;
  sizes?: {
    thumbnail?: MediaSize;
    card?: MediaSize;
  };
  id?: string;
  url?: string;
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

export interface CartaBlock {
  createdAt: string;
  updatedAt: string;
  meta: Record<string, unknown>;
  slugLock: boolean;
  _status: string;
  content: any;
  heroImage: CartaMedia;
  populatedAuthors: any[];
  publishedAt: string;
  slug: string;
  title: string;
  id: string;
}

/** What the component really needs */
export interface CartaDTO {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  meta: Record<string, unknown>;
  slugLock: boolean;
  _status: string;
  content: any;
  heroImage: CartaMedia;
  populatedAuthors: any[];
}
