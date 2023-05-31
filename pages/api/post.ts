import data from "@/constant/data"
import { NextApiRequest, NextApiResponse } from "next"

const { posts } = data
interface Post {
  id: number
  title: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { message: string }>
) {
  if (req.method === "GET") {
    const postId = Number(req.query.id) // Assuming the ID is passed as a query parameter

    if (isNaN(postId)) {
      res.status(400).json({ message: "Invalid ID" })
      return
    }

    const post = posts.find((p) => p.id === postId)

    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json({ message: "Post not found" })
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
