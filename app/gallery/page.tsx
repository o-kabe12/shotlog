import { MOCK_TASKS } from "@/app/lib/mockData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | ShotLog",
  description: "写真とテキストを組み合わせた写真保管アプリ",
};

export default function Gallery() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl font-bold underline">ギャラリー</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_TASKS.map((item) => (
          <div key={item.id}>
            <Link href={`/gallery/${item.id}`}>
              <div className="w-full h-[300px]">
                <Image src={item.image} alt={item.text} width={300} height={300} className="w-full h-full"/>
              </div>
              <p className="text-gray-500 text-center mt-2">{item.text}</p>
              <p className="text-sm text-gray-500 mt-2">{item.createdAt}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">{tag}</span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
