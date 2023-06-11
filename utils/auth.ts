import { jwtVerify } from "jose"

interface UserJwtPayLoad {
  jti: string
  iat: number
}

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET

  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET_KEY is not set.")
  }
  return secret
}

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    )
    return verified.payload as UserJwtPayLoad
  } catch (error) {
    throw new Error("Your token has expired")
  }
}

// import { verify } from "jsonwebtoken"
// export const getTokenFromLocalStorage = () => {
//   const token = localStorage.getItem("token")
//   return token
// }

// const secretKey = "sdhbsKDSJDANq13we3@!@%^&*sdjaasSS" // Replace with your actual secret key

// export function verifyToken(token: string): string | null {
//   try {
//     // Verify the token using the secret key
//     const decodedToken = verify(token, secretKey) as { userId: string }

//     // Return the user ID
//     return decodedToken.userId
//   } catch (error) {
//     // Token verification failed
//     return null
//   }
// }
