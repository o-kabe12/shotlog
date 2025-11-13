"use client";

import { MOCK_DATA } from "@/app/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { Item } from "../lib/type";
import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";

const filterByText = (items: Item[], query: string): Item[] => {
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
  });
}

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState("a-z");
  const [selectedDate, setSelectedDate] = useState<string>(''); 

  const dateOptions = useMemo(() => {
    // 全てのcreatedAtから "YYYY-MM" 部分を抽出
    const allDates = MOCK_DATA.map(item => item.createdAt?.substring(0, 7)).filter((date): date is string => !!date);
    
    
    // ユニークな "YYYY-MM" を取得し、ソート
    const uniqueDates = Array.from(new Set(allDates)).sort();
    
    // ラベル（YYYY年MM月）に変換
    const options = uniqueDates.map(ym => {
        const [year, month] = ym.split('-');
        return {
            value: ym, // フィルタリングに使う値 (例: "2025-11")
            label: `${year}年${month}月`
        };
    });

    // 「すべての日付」オプションを先頭に追加
    return [{ value: '', label: 'すべての日付' }, ...options];
  }, []); // MOCK_DATAは不変と仮定し、依存配列は空

  const filteredData = useMemo(() =>{
    // 1. テキスト検索でフィルタリング
    let currentData = filterByText(MOCK_DATA as Item[], searchQuery);

    // 2. 選択された日付（年+月）でフィルタリング
    if (selectedDate) {
      currentData = currentData.filter(item => item.createdAt?.startsWith(selectedDate));
    }

    // 3. ソート
    return currentData.sort((a, b) => {
      // createdAtがnullまたはundefinedの場合は0として扱う
      const dateA = a.createdAt || '';
      const dateB = b.createdAt || '';

      switch (sortOrder) {
        case 'a-z':
          return dateA.localeCompare(dateB) || 0;
        case 'z-a':
          return dateB.localeCompare(dateA) || 0;
        default:
          return 0;
      }
    });
  },[searchQuery, selectedDate, sortOrder]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }

    // 日付フィルターの変更を処理するハンドラ
    const handleDateChange = (date: string) => {
      setSelectedDate(date);
    }

  return (
    <div className="w-[90%] mx-auto py-10">
      <FilterBar
        value={searchQuery}
        onChange={handleSearchChange}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        dateOptions={dateOptions}
        selectedDate={selectedDate}
        setSelectedDate={handleDateChange}
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
