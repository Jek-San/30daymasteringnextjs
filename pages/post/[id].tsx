// pages/products/[id].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
interface Post {
  id: number
  title: string
}

interface PostPageProps {
  post: Post | null
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (post) {
      setIsLoading(false)
    }
  }, [post])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      {/* Render other product details */}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch dynamic paths from an API
  const res = await fetch(`http://localhost:3000/api/posts`)
  const dynamicPaths = await res.json()

  // Combine dynamic and static paths

  const paths = dynamicPaths.map((path: any) => ({
    params: { id: path.id.toString() },
  }))
  console.log(paths)

  return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  try {
    const { id } = params ?? {} 
    
    const res = await fetch(`http://localhost:3000/api/post?id=${id}`)
    const post = await res.json()
    return { props: { post } }

    // Rest of the code...
  } catch (error) {
    console.error("Error fetching data:", error)

    // Handle the error gracefully
  }
  return { props: { post: null } }
}

export default PostPage
