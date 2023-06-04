import Table from "@/component/table/Table"
import { GetStaticProps } from "next"
import { FC } from "react"
import { Variant } from "../../interfaces/interfaces"
import Link from "next/link"

interface pageProps {
  variants: Variant[]
}

const page: FC<pageProps> = ({ variants }) => {
  if (!variants) {
    return <div className="div">Loading...</div>
  } else {
    return (
      <>
        <Link href="/variant/create">
          <button>Create Category</button>
        </Link>
        <Table url={"/variant"} />
      </>
    )
  }
}

export default page

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/variant")
  const variants: Variant = await response.json()
  console.log(variants)
  return {
    props: {
      variants,
    },
  }
}
