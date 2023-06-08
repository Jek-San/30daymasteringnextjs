import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Get all users
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, password } = req.body

    try {
      const user = await prisma.tblusers.findFirst({
        where: {
          Username: username,
        },
      })

      if (user && user.Password === password) {
        res.status(200).json({ success: true })
      } else {
        res.status(401).json({ success: false })
      }
    } catch (error) {
      console.error("Error during login:", error)
      res.status(500).json({ success: false })
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" })
  }
}

export const getAllUsers = async () => {
  const users = await prisma.tblusers.findMany()
  return users
}

// Get a single user by ID
export const getUserById = async (userId: string) => {
  const user = await prisma.tblusers.findUnique({
    where: { Id: userId },
  })
  return user
}

// Create a new user
export const createUser = async (data: {
  Username: string
  Email: string
  Password: string
  IsDelete?: boolean
  CreateBy?: string
  CreatedDate?: Date
  UpdateBy?: string
  UpdateDate?: Date
}) => {
  const user = await prisma.tblusers.create({
    data,
  })
  return user
}

// Update a user by ID
export const updateUser = async (
  userId: string,
  data: {
    Username?: string
    Email?: string
    Password?: string
    IsDelete?: boolean
    CreateBy?: string
    CreatedDate?: Date
    UpdateBy?: string
    UpdateDate?: Date
  }
) => {
  const user = await prisma.tblusers.update({
    where: { Id: userId },
    data,
  })
  return user
}

// Delete a user by ID
export const deleteUser = async (userId: string) => {
  const user = await prisma.tblusers.delete({
    where: { Id: userId },
  })
  return user
}
