import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Home | ShotLog",
  description: "写真とテキストを組み合わせた写真保管アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="max-w-[1366px] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
