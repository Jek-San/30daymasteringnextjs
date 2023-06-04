import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import data from "@/constant/data"
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method)
  if (req.method === "GET") {
    const { Id } = req.query

    if (Id) {
      const variantId = parseInt(Id as string)

      try {
        const variant = await prisma.tblvariant.findUnique({
          where: { Id: variantId },
        })

        if (variant) {
          res.status(200).json(variant)
        } else {
          res.status(404).json({ message: "Variant not found" })
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    } else {
      try {
        const variants = await prisma.tblvariant.findMany()
        res.status(200).json(variants)
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  } else if (req.method === "POST") {
    try {
      const { IdCategory, NameVariant, Description } = req.body

      const variant = await prisma.tblvariant.create({
        data: {
          IdCategory,
          NameVariant,
          Description,
          CreateBy: "Admin",
          IsDelete: false,
          UpdateDate: new Date(),
        },
      })

      res.status(201).json(variant)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else if (req.method === "PUT") {
    try {
      console.log(req.body)
      const { Id, IdCategory, nameVariant, Description } = req.body

      const updatedVariant = await prisma.tblvariant.update({
        where: {
          Id: Number(Id),
        },
        data: {
          IdCategory,
          NameVariant: nameVariant,
          Description,
          UpdateBy: "Admin",
          UpdateDate: new Date(),
        },
      })

      res.status(200).json(updatedVariant)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query

      const variantId: number = parseInt(id as string, 10)

      const deletedVariant = await prisma.tblvariant.delete({
        where: {
          Id: variantId,
        },
      })

      res.status(200).json(deletedVariant)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else {
    res.status(404).json({ message: "Not found" })
  }
}
