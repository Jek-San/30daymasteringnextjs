import Head from "next/head"
import { FC } from "react"
import Navbar from "./Navbar"

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </>
  )
}

export default Layout
