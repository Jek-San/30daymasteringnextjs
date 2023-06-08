import Table from "@/component/table/Table"
import { GetStaticProps } from "next"
import { FC } from "react"
import { Variant } from "../../interfaces/interfaces"
import Link from "next/link"
import { PrismaClient } from "@prisma/client"

interface pageProps {
  variants: Variant[]
  variantsWithCategories: any[]
}

const page: FC<pageProps> = ({ variantsWithCategories }) => {
  if (!variantsWithCategories) {
    return <div className="div">Loading...</div>
  } else {
    return (
      <>
        <Link href="/variant/create">
          <button className="b">Create Variant</button>
        </Link>
        <Table url={"/variant"} />
      </>
    )
  }
}

export default page

export async function getServerSideProps() {
  const prisma = new PrismaClient()
  try {
    const variantsWithCategories = await prisma.tblvariant.findMany({
      select: {
        Id: true,
        NameVariant: true,
        Description: true,
        tblcategory: {
          select: {
            Id: true,
            NameCategory: true,
          },
        },
      },
    })
    const transformedVariants = variantsWithCategories.map((variant) => {
      const { tblcategory, ...rest } = variant
      return {
        ...rest,
        NameCategory: tblcategory?.NameCategory || null,
      }
    })
    console.log(transformedVariants  )
    return {
      props: {
        variantsWithCategories,
      },
    }
  } catch (error) {}
  const response = await fetch("http://localhost:3000/api/variant")
  const variants: Variant = await response.json()
  console.log(variants)
  return {
    props: {
      variants,
    },
  }
}
