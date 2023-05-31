import data from "@/constant/data"
import { NextApiRequest, NextApiResponse } from "next"

const { posts } = data
// interface Post {
//   id: number
//   title: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof posts | { message: string }>
) {
  if (req.method === "GET") {
    // Handle GET request

    res.status(200).json(posts)
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
