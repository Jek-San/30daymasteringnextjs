import { NextApiRequest, NextApiResponse } from "next"
import { verify } from "jsonwebtoken"

// Define the secret key used to sign the JWT token
const secretKey = "your-secret-key"

// Define the interface for the custom request object with the user property
interface CustomApiRequest extends NextApiRequest {
  user?: {
    id: string
    // Include other relevant user properties
  }
}

// Define the authentication middleware function
const authenticateMiddleware =
  (handler: (req: CustomApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (req: CustomApiRequest, res: NextApiResponse) => {
    try {
      // Retrieve the JWT token from the request headers
      const token = req.headers.authorization?.replace("Bearer ", "")

      // Check if the token exists
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
      }

      // Verify the token using the secret key
      const decodedToken = verify(token, secretKey) as { userId: string }

      // Attach the user information to the request object
      req.user = {
        id: decodedToken.userId,
        // Add other relevant user properties extracted from the token
      }

      // Call the actual route handler
      await handler(req, res)
    } catch (error) {
      console.error("Authentication Error:", error)
      return res.status(401).json({ message: "Unauthorized" })
    }
  }

export default authenticateMiddleware
