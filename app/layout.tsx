import "./globals.css"
import { getServerSession } from "next-auth"
import { Roboto } from "next/font/google"

import Provider from "@/app/components/provider"
import SessionProvider from "@/app/components/sessionProvider"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "blog",
  description: "Next.js Supabase blog",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession(authOptions)
  
  return (
    <html lang="ja">
      <body className={roboto.className}>
        <SessionProvider>
          <Provider>
            {children}  
          </Provider>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout