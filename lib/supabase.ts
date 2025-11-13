// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// 環境変数を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// クライアントを初期化
export const supabase = createClient(supabaseUrl, supabaseAnonKey)