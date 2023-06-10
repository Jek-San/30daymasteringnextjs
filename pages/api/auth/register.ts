import { hash } from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { email, password, userName } = req.body
  console.log(email, password, userName)
  try {
    const existingUser = await prisma.tblusers.findFirst({
      where: { Email: email },
    })

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" })
    }

    const hashedPassword = await hash(password, 10)

    const newUser = await prisma.tblusers.create({
      data: {
        Email: email,
        Password: hashedPassword,
        Username: userName,
        CreatedDate: new Date(),
      },
    })

    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
