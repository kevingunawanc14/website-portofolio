import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (

    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider >

  )
}
