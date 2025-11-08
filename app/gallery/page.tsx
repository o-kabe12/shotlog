"use client";

import { MOCK_DATA } from "@/app/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import InputSearch from "../components/InputSearch";
import { Item } from "../lib/type";
import { useMemo, useState } from "react";

const filterData = (items: Item[], query: string): Item[] => {
  if (!query) {
    return items;
  }

  const lowerCaseQuery = query.toLowerCase();
  
  return items.filter(item =>{
    // 1. item.textでフィルタリング
    const textMatch = item.text.toLowerCase().includes(lowerCaseQuery);
    // 2. item.tagsでフィルタリング
    const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
    // 3. item.createdAtでフィルタリング
    const dateMatch = item.createdAt.toLowerCase().includes(lowerCaseQuery);

    return textMatch || tagsMatch || dateMatch;
  })
}

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = useMemo(() =>{
    return filterData(MOCK_DATA as Item[], searchQuery);
  },[searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="w-[90%] mx-auto py-10">
      <InputSearch 
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div key={item.id}>
            <Link href={`/gallery/${item.id}`} className="md:hover:opacity-80 transition-opacity">
              <div className="w-[300px] h-[300px]">
                <Image src={item.image} alt={item.text} width={250} height={250} className="w-full h-full object-cover"/>
              </div>
              <p className="text-sm text-gray-500 mt-2">{item.createdAt}</p>
            </Link>
          </div>
        ))}
      </div>
      {filteredData.length === 0 && (
        <p className="text-lg text-gray-500 text-center mt-10">検索結果はありません</p>
      )}
    </div>
  );
}
