import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
          await prisma.$disconnect()
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
          CreateBy: "Admin",
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
    await prisma.$disconnect()
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
          UpdateBy: "Admin",
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
    await prisma.$disconnect()
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query

      const productId: number = parseInt(id as string, 10)

      const deletedProduct = await prisma.tblvariant.delete({
        where: {
          Id: String(productId),
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
  await prisma.$disconnect()
}
