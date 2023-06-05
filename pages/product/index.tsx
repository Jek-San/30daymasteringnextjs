import Table from "@/component/table/Table"
import { GetStaticProps } from "next"
import { FC } from "react"
import Link from "next/link"
import { tblproduct } from "@prisma/client"

interface Product extends tblproduct {}

interface pageProps {
  products: Product[]
}

const page: FC<pageProps> = ({ products }) => {
  if (!products) {
    return <div className="div">Loading...</div>
  } else {
    return (
      <>
        <Link href="/product/create">
          <button>Create Category</button>
        </Link>
        <Table url={"/product"} />
      </>
    )
  }
}

export default page

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/product")
  const products: Product = await response.json()

  return {
    props: {
      products,
    },
  }
}
