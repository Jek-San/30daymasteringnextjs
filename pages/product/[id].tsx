import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface Product {
  id: number
  name: string
  descriprion: string
}

interface ProductPageProps {
  product: Product | null
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (product) {
      setIsLoading(false)
    }
  }, [product])
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.descriprion}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`)
  const dynamicPaths = await res.json()

  const paths = dynamicPaths.map((path: any) => ({
    params: {
      id: path.id.toString(),
    },
  }))
  return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  try {
    const { id } = params ?? {}
    const res = await fetch(`http://localhost:3000/api/product?id=${id}`)
    const product = await res.json()
    return { props: { product } }
  } catch (error) {
    console.error("Error Fetching Data", error)
  }

  return { props: { product: null } }
}

export default ProductPage
