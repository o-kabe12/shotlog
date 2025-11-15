"use client";

import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="w-[90%] mx-auto h-[90dvh] flex flex-col justify-center gap-6">
        <h1 className="text-xl text-center font-bold">ログイン</h1>

        {/* <form onSubmit={handleLogin} className="w-[400px] p-10 mx-auto flex flex-col gap-4 items-center"> */}
        <form className="w-[400px] px-6 py-12 mx-auto flex flex-col gap-6 justify-center border border-gray-300 rounded-lg">
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="block w-full p-2  bg-gray-200 rounded" 
              required
            />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="block w-full p-2 bg-gray-200 rounded" 
              required 
            />
          </div>

          <PrimaryButton type="submit" value={loading ? 'ログイン中...' : 'ログイン'} />
          
        </form>

        <p className="text-center mt-4">新規登録は<Link href="/signup" className="text-blue-500 underline hover:opacity-70 cursor-pointer">こちら</Link></p>
      </div>
    </div>
  );
}
