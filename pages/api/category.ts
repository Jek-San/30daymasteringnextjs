import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const oke = true
  if (oke) {
    const { id } = req.query
    console.log({ id })
    if (id) {
      const categoryId = parseInt(id as string)

      try {
        const category = await prisma.tblcategory.findUnique({
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
        const categories = await prisma.tblcategory.findMany()
        res.status(200).json(categories)
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  } else {
  }
}
