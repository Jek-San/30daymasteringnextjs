import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const items = await prisma.tblcategory.findMany()
    await res.json(items)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "An error occurred" })
  }
}
