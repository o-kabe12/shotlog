import InputSearch from "./InputSearch"

interface DateOption {
  value: string;
  label: string;
}

export default function FilterBar({ 
  value,
  onChange,
  sortOrder, 
  setSortOrder,
  dateOptions,
  selectedDate,
  setSelectedDate
}:{ 
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortOrder: string, 
  setSortOrder: (order: string) => void;
  dateOptions: DateOption[]; // YYYY年MM月 のオプションリスト
  selectedDate: string; // 選択中の YYYY-MM
  setSelectedDate: (date: string) => void; // 選択変更ハンドラ
}){
  return (
    <div className="flex gap-4 items-center mb-6">
      <InputSearch value={value} onChange={onChange}/>

      {/* 日付フィルタリング用のドロップダウンを追加 */}
      <span className="flex items-center gap-2">
        <label htmlFor="date-filter" className="text-sm text-gray-600 font-medium whitespace-nowrap">日付で絞り込み:</label>
        <select 
          name="date-filter" 
          id="date-filter" 
          className="border border-gray-300 rounded-md p-2 text-sm md:cursor-pointer focus:ring-blue-500 focus:border-blue-500" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </span>

      {/* ソート順のドロップダウン */}
      
      <span className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-600 font-medium whitespace-nowrap">ソート:</label>
        <select 
          name="sort" 
          id="sort" 
          className="border border-gray-300 rounded-md p-2 text-sm md:cursor-pointer focus:ring-blue-500 focus:border-blue-500" 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="a-z">日付昇順</option>
          <option value="z-a">日付降順</option>
        </select>
      </span>
    </div>
  );
}