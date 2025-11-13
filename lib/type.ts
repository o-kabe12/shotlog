export type Item = {
  id: string;
  image: string;
  text: string;
  tags: string[];
  createdAt: string;
}

export type GalleryItemDetailProps = {
  params: Promise<{
    id: string;
  }>;
}