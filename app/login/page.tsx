"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from 'next/navigation';
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useState } from "react";
import { translateAuthError } from '@/lib/authErrors';

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(translateAuthError(error.message));
    } else {
      router.push('/');
      router.refresh();
    }
  }

  return (
    <div>
      <div className="w-[90%] mx-auto h-[90dvh] flex flex-col justify-center gap-6">
        <h1 className="text-xl text-center font-bold">ログイン</h1>

        {error && (
          <p className="text-center font-semibold text-red-500">
            ❌ {error}
          </p>
        )}

        <form 
          className="w-[400px] px-6 py-12 mx-auto flex flex-col gap-6 justify-center border border-gray-300 rounded-lg"
          onSubmit={handleLogin}
        >
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
