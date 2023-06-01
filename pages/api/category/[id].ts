// pages/api/category/[slug].ts

import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query

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
      res.status(400).json({ message: "Invalid request" })
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
