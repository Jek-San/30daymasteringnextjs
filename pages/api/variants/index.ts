import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query
    console.log({ id })
    if (id) {
      const categoryId = parseInt(id as string)

      try {
        const category = await prisma.tblvariant.findUnique({
          where: { Id: categoryId },
        })

        if (category) {
          res.status(200).json(category)
        } else {
          res.status(404).json({ message: "Category not found" })
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    } else {
      try {
        const categories = await prisma.tblvariant.findMany()
        res.status(200).json(categories)
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  } else if (req.method === "POST") {
    console.log("reqbody ", req.body)
    console.log("reqheader ", req.headers)
    const data = req.body
    const { name, description } = data
    console.log({ name, description })
    res.status(200).json({ oke: "post succed" })
  }
}
