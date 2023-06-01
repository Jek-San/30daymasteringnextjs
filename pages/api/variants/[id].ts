import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  if (req.method === "GET") {
    if (id) {
      const idVariant = parseInt(id as string)
      try {
        const variant = await prisma.tblvariant.findUnique({
          where: { Id: idVariant },
        })
        if (variant) {
          res.status(200).json(variant)
        }
        res.status(404).json({ message: "Variant Not Found" })
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    } else {
      try {
        const variant = await prisma.tblvariant.findMany()
        res.status(200).json(variant)
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  }
}
