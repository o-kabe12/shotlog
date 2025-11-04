import { MOCK_TASKS } from "@/app/lib/mockData";

export default function Gallery() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl font-bold underline">ギャラリー</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_TASKS.map((item) => (
          <div key={item.id}>
            <div className="w-full h-[300px]">
              <img src={item.image} alt={item.text} className="w-full h-full object-cover"/>
            </div>
            <p className="text-gray-500 text-center mt-2">{item.text}</p>
            <p className="text-sm text-gray-500 mt-2">{item.createdAt}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
