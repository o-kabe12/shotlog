import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Gallery | ShotLog",
  description: "写真とテキストを組み合わせた写真保管アプリ",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
