import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // console.log("req.query", req.query)
    const { id } = req.query

    try {
      const variant = await prisma.tblvariant.findUnique({
        where: { Id: String(id) },
      })

      if (variant) {
        res.status(200).json(variant)
      } else {
        res.status(404).json({ message: "variant not found" })
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  }
}
