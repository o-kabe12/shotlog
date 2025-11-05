import type { Metadata } from "next";
import "../../globals.css";

import { MOCK_TASKS } from "@/app/lib/mockData";
import { GalleryItemDetailProps } from "@/app/lib/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from 'react';

export const metadata: Metadata = {
  title: "Gallery 詳細 | ShotLog",
  description: "写真とテキストを組み合わせた写真保管アプリ",
};

export default function GalleryItemDetail({ params }: GalleryItemDetailProps) {
  const resolvedParams = use(params);
  const itemId = Number(resolvedParams.id); 

  const item = MOCK_TASKS.find((task) => Number(task.id) === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl font-bold underline mb-4">ギャラリー詳細</h1>

      <div className="md:flex items-start gap-6">
        <div>
          <Image src={`${item.image}`} alt={item.text} width={300} height={300} className="w-full h-full"/>
        </div>
        <div>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  return MOCK_TASKS.map((task) => ({
    id: String(task.id),
  }));
}