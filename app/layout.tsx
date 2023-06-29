import "./globals.css"
import { Roboto } from "next/font/google"

import ChakraUIProvider from "@/components/provider"
import AuthChecker from "@/components/authChecker";
import { Suspense } from "react";
import { NavigationEvents } from "@/utils/navigationEvents";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "blog",
  description: "Next.js Supabase blog",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="ja">
      <body className={roboto.className}>
        <ChakraUIProvider>
          <AuthChecker>
            {children}  
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </AuthChecker>
        </ChakraUIProvider>
      </body>
    </html>
  )
}

export default RootLayout