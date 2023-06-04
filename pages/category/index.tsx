import Table from "@/component/table/Table"
import { GetStaticProps } from "next"
import { FC } from "react"
import { tblcategory } from "@prisma/client"
import Link from "next/link"
interface Category extends tblcategory {}
interface pageProps {
  categories: Category[]
}

const page: FC<pageProps> = ({ categories }) => {
  if (!categories) {
    return <div className="div">Loading...</div>
  } else {
    return (
      <>
        <Link href="/category/create">
          <button>Create Category</button>
        </Link>
        <Table url={"api/category"} />
      </>
    )
  }
}

export default page

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/category")
  const categories: Category = await response.json()
  console.log(categories)
  return {
    props: {
      categories,
    },
  }
}
