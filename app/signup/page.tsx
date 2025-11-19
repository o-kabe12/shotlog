// app/signup/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { translateAuthError } from '@/lib/authErrors';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // 成功メッセージ判定用

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setIsSuccess(false);

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      console.error('サインアップエラー:', error);
      setMessage(translateAuthError(error.message));
      setIsSuccess(false);
    } else {
      // Supabaseのデフォルト設定（確認メール必須）を想定したメッセージ
      if (data.user) {
         // ★ メール確認を無効にしている場合の処理（通常は開発/テスト用）
         router.push('/');
         router.refresh();
      } else {
         // ★ 確認メールが送信された場合の標準的な処理
         setMessage('登録が完了しました。ご登録いただいたメールアドレスに確認メールを送信しましたので、ご確認ください。');
         setIsSuccess(true);
      }
    }
  };

  return (
    <div>
      <div className="w-[90%] mx-auto h-[90dvh] flex flex-col justify-center gap-6">
        <h1 className="text-xl text-center font-bold">新規登録</h1>

        {/* 成功/エラーメッセージの表示 */}
        {message && (
          <p className={`text-center font-semibold ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>
            {isSuccess ? '✅ ' : '❌ '} {message}
          </p>
        )}

        {/* 成功時はフォームを非表示 */}
        {!isSuccess && (
          <form 
            className="w-[400px] px-6 py-12 mx-auto flex flex-col gap-6 justify-center border border-gray-300 rounded-lg"
            onSubmit={handleSignUp}
          >
            {/* メールアドレス入力 */}
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 bg-gray-200 rounded" 
                required
              />
            </div>
            
            {/* パスワード入力 */}
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

            {/* PrimaryButtonのスタイルを再現したボタン */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded font-bold text-white transition-opacity ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? '登録処理中...' : 'アカウントを登録'}
            </button>
            
          </form>
        )}

        {/* ログインページへのリンク */}
        <p className="text-center mt-4">
          既にアカウントをお持ちの場合は
          <Link href="/login" className="text-blue-500 underline hover:opacity-70 cursor-pointer ml-1">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
}