import Link from "next/link";
import { GrGallery } from "react-icons/gr";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">ShotLog</Link>
        </h1>

        <Link href="/gallery" className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded">
          <GrGallery size={16} color="white" />
        </Link>
      </div>
    </header>
  );
}