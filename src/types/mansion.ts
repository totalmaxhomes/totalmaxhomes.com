// types/mansion.ts
export type Mansion = 
  | {
      type: "text";
      title: string;
      description: string;
      url?: null; // Optional and defaults to null for text
      backgroundImage?: string; // Optional background image for text
    }
  | {
      type: "image";
      title?: null; // Optional and defaults to null for image
      description?: null; // Optional and defaults to null for image
      url: string;
    };

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface GalleryTab {
  id: string;
  title: string;
  images: GalleryImage[];
}

export interface Gallery {
  tabs: GalleryTab[];
}