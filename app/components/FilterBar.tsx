import InputSearch from "./InputSearch"

export default function FilterBar({ 
  value,
  onChange,
  sortOrder, 
  setSortOrder 
}:{ 
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortOrder: string, setSortOrder: (order: string) => void 
}){
  return (
    <div className="flex gap-4 items-center mb-6">
      <InputSearch value={value} onChange={onChange}/>
      <span><select name="sort" id="sort" className="border-1 border-gray-300 rounded-md p-1 md:cursor-pointer" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="a-z">日付昇順</option>
        <option value="z-a">日付降順</option>
      </select></span>
    </div>
  );
}