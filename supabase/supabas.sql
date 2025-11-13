CREATE TABLE public.items (
    -- 要素のID (主キー): UUIDで自動生成
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    -- ユーザーID (外部キー): 認証機能でログインしたユーザーのIDを格納
    user_id uuid NOT NULL,
    -- 画像のURL: Storageに保存された画像へのリンク
    image_url text NULL,
    -- テキスト内容
    content text NOT NULL,
    -- タグ: 複数のタグを配列として格納
    tags text[] NULL,
    -- 作成日時: レコード作成時に自動で現在日時を設定
    created_at timestamp with time zone NOT NULL DEFAULT now(),

    -- 主キーの設定
    CONSTRAINT items_pkey PRIMARY KEY (id),

    -- user_idをauth.usersテーブルと関連付ける (外部キー制約)
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- RLS (Row Level Security) の有効化
-- これにより、アクセス制御が可能になります
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- データの作成と読み取りを許可するポリシー（次の章で詳しく説明）
CREATE POLICY "Users can insert their own items."
ON public.items FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own items."
ON public.items FOR SELECT USING (auth.uid() = user_id);