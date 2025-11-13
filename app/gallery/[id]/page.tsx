import type { Metadata } from "next";
import "../../globals.css";

import { MOCK_DATA } from "@/lib/mockData";
import { GalleryItemDetailProps } from "@/lib/type";
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

  const item = MOCK_DATA.find((task) => Number(task.id) === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="md:flex items-start gap-6 py-10">
        <div className="w-full md:w-[45%]  mb-6 md:mb-0">
          <Image src={`${item.image}`} alt={item.text} width={300} height={300} className="w-full h-full"/>
        </div>
        <div>
          <p className="text-sm text-gray-500">{item.createdAt}</p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">{tag}</span>
              ))}
            </div>
          )}
          <p className="mt-2 text-lg">{item.text}</p>
        </div>
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  return MOCK_DATA.map((task) => ({
    id: String(task.id),
  }));
}