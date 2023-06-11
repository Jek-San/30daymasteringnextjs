import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verify the token

  try {
    console.log("req methodnya:", req.method)
    console.log("req bodynya", req.body)

    if (req.method === "GET") {
      const { Id } = req.query

      if (Id) {
        const productId = String(Id)

        try {
          const product = await prisma.tblproduct.findUnique({
            where: { Id: productId },
          })

          if (product) {
            res.status(200).json(product)
          } else {
            res.status(404).json({ message: "Product not found" })
          }
        } catch (error) {
          res.status(500).json({ message: "Internal server error" })
        }
      } else {
        try {
          const products = await prisma.tblproduct.findMany()
          res.status(200).json(products)
        } catch (error) {
          res.status(500).json({ message: "Internal server error" })
        }
      }
    } else if (req.method === "POST") {
      try {
        const { NameProduct, Price, Stock, IdVariant, Image } = req.body

        const product = await prisma.tblproduct.create({
          data: {
            NameProduct,
            Price,
            Stock,
            CreateBy: userId,
            IdVariant,
            Image,
            CreatedDate: new Date(),
          },
        })
        res.status(201).json(product)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
    } else if (req.method === "PUT") {
      try {
        const { Id, NameProduct, Price, Stock, IdVariant, Image } = req.body

        const updatedProduct = await prisma.tblproduct.update({
          where: {
            Id: String(Id),
          },
          data: {
            NameProduct,
            Price,
            Stock,
            UpdateBy: userId,
            IdVariant,
            Image,
            UpdateDate: new Date(),
          },
        })

        res.status(200).json(updatedProduct)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
    } else if (req.method === "DELETE") {
      try {
        const { id } = req.query

        const deletedProduct = await prisma.tblproduct.delete({
          where: {
            Id: String(id),
          },
        })

        res.status(200).json(deletedProduct)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
    } else {
      res.status(404).json({ message: "Not found" })
    }
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: "Unauthorized" })
  } finally {
    await prisma.$disconnect()
  }
}
