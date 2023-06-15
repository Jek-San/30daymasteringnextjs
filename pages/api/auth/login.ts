import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { SignJWT } from "jose"
import { getJwtSecretKey } from "@/utils/auth"
import cookie from "cookie"

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
    //if password donot match send message to user Invalid credential
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" })
    }
    //return a jwt cookie to the user
    const token = await new SignJWT({})
      .setProtectedHeader({
        alg: "HS256",
      })
      .setJti(user.Id)
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(getJwtSecretKey()))

    //SET TOKEN COOKE AS A HEADER
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
      })
    )
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
