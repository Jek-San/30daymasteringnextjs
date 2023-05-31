import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"
import data from "@/constant/data"

const { products } = data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const productId = Number(req.query.id)
    if (isNaN(productId)) {
      res.status(400).json({ message: "invalid Id" })
      return
    }
    const product = products.find((p) => {
      return p.id === productId
    })

    if (product) {
      res.status(200).json(product)
    } else {
      res.status(400).json({ message: "Product is Not Found" })
    }
  }
}
