import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Link className="text-blue-500" href="/gallery/">ギャラリー</Link>
    </div>
  );
}
