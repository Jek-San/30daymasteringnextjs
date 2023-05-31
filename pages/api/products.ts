import { NextApiRequest, NextApiResponse } from "next"
import data from "@/constant/data"

const { products } = data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products)
  } else {
    res.status(405).json({ message: "data not found" })
  }
}
