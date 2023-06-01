import Table from "@/component/table/Table"
import { GetStaticProps } from "next"
import { FC } from "react"
import { Category } from "../../interfaces/interfaces"

interface pageProps {
  categories: Category[]
}

const page: FC<pageProps> = ({ categories }) => {
  if (!categories) {
    return <div className="div">Loading...</div>
  } else {
    return (
      <>
        <Table data={categories} />
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
