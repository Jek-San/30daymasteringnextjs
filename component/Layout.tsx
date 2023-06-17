import Head from "next/head"
import { FC } from "react"

import Nav from "./Nav"

const Layout = (props: any) => {
  return (
    <>
      <Nav />
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </>
  )
}

export default Layout
