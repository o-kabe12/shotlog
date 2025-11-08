interface InputSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSearch({ value, onChange }: InputSearchProps) {
  return (
    <div className="mb-6 md:w-[500px]">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}