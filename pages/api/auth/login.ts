import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
const prisma = new PrismaClient()

//Login

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { email, password } = req.body
  const jwtScret = process.env.JWT_SECRET ?? "JwtecrettNotfound"
  console.log(jwtScret)
  try {
    const user = await prisma.tblusers.findFirst({ where: { Email: email } })

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const passwordMatch = await compare(password, user.Password)

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = sign({ userId: user.Id }, jwtScret, {
      expiresIn: "1m",
    })
    console.log({ token })
    res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
