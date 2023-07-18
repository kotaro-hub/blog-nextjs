import "./globals.css"
import { Roboto } from "next/font/google"

import Provider from "@/components/provider"
import AuthChecker from "@/components/authChecker"

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

  return (
    <html lang="ja">
      <body className={roboto.className}>
        <Provider>
          <AuthChecker>
            {children}  
          </AuthChecker>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout