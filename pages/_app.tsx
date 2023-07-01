import Nav from "@/component/Nav"
import "@/styles/globals.css"

// import '../styles/manualstyle.scss'
import type { AppProps } from "next/app"
import "react-toastify/dist/ReactToastify.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </>
  )
}
