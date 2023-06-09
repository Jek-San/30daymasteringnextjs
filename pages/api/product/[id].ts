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
    const variantId = parseInt(id as string)

    try {
      const variant = await prisma.tblproduct.findUnique({
        where: { Id: String(variantId) },
      })

      if (variant) {
        res.status(200).json(variant)
      } else {
        res.status(404).json({ message: "product not found" })
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  }
}
