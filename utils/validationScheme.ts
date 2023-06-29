import { z } from "zod";

/**
 * サインイン、サインアウトフォームのバリデーション
 */
const passwordScheme = z.string().refine(password => {
  // 8文字以上
  if (password.length < 8) return false;

  // 大文字が含まれているか
  if (!/[A-Z]/.test(password)) return false;

  // 小文字が含まれているか
  if (!/[a-z]/.test(password)) return false;

  // 数字が含まれているか
  if (!/[0-9]/.test(password)) return false;

  // 英数字のみか
  if (!/^[A-Za-z0-9]+$/.test(password)) return false;

  return true;
}, {
  message: "パスワードは8文字以上で、大文字、小文字、数字がそれぞれ1つ以上含まれ、英数字でなければなりません。",
})

export const authFormScheme = z.object({
  name: z.string().nonempty("名前は必須です").min(4, "名前は4文字以上で入力してください"),
  email: z.string().nonempty("メールアドレスは必須です").email("正しいメールアドレスを入力してください"),
  password: passwordScheme
})

/**
 * 新規投稿フォームのバリデーション
 */

export const postFormScheme = z.object({
  title: z.string().nonempty("タイトルは必須です"),
  contents: z.string().nonempty("内容は必須です"),
  tag: z.array(z.string()).min(1, "一つは必ず選択してください").max(3, "3つまで選択可能です")
})