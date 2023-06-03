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
    const { id } = req.query
    console.log({ id })
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
      try {
        const categories = await prisma.tblcategory.findMany()
        res.status(200).json(categories)
      } catch (error) {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  } else if (req.method === "POST") {
    try {
      const { nameCategory, Description } = req.body

      const category = await prisma.tblcategory.create({
        data: {
          NameCategory: nameCategory,
          Description,
          CreateBy: "Admin",
          IsDelete: false,
          UpdateDate: new Date(),
        },
      })
      console.log(data)

      res.status(201).json(category)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else if (req.method === "PUT") {
    try {
      const { Id, nameCategory, Description } = req.body

      const updatedCategory = await prisma.tblcategory.update({
        where: {
          Id: Number(Id),
        },
        data: {
          NameCategory: nameCategory,
          Description,
          UpdateBy: "Admin",
          UpdateDate: new Date(),
        },
      })

      res.status(200).json(updatedCategory)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query

      const categoryId: number = parseInt(id as string, 10)

      const deletedCategory = await prisma.tblcategory.delete({
        where: {
          Id: categoryId,
        },
      })

      res.status(200).json(deletedCategory)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Internal server error" })
    }
  } else {
    res.status(404).json({ message: "Not found" })
  }
}
