export const translateAuthError = (errorMessage: string): string => {
  // メッセージのトリミングと小文字化を行い、柔軟にマッチングさせる
  const normalizedMessage = errorMessage.trim().toLowerCase();

  if (normalizedMessage.includes('password should be at least 6 characters')) {
    return 'パスワードは6文字以上で入力してください。';
  }
  
  if (normalizedMessage.includes('invalid login credentials')) {
    return 'メールアドレスまたはパスワードが正しくありません。';
  }

  if (normalizedMessage.includes('user already registered')) {
    return 'このメールアドレスは既に登録されています。';
  }
  
  if (normalizedMessage.includes('invalid email')) {
    return '無効なメールアドレス形式です。';
  }

  if (normalizedMessage.includes('email not confirmed')) {
    return 'メールアドレスが確認されていません。ご登録のメールアドレスをご確認ください。';
  }
  
  // その他の一般的なネットワークエラーや予期せぬエラー
  if (normalizedMessage.includes('network error') || normalizedMessage.includes('failed to fetch')) {
    return 'サーバーとの通信に失敗しました。時間をおいて再度お試しください。';
  }

  // マッチしなかった場合は、一般的なエラーメッセージを返す
  return '認証中に予期せぬエラーが発生しました。';
};