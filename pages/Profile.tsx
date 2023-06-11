import { NextPageContext } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getTokenFromLocalStorage } from "../utils/auth" // Helper function to retrieve the token from local storage
import authenticateMiddleware from "../middleware"
import { tblproduct } from "@prisma/client"
interface Product extends tblproduct {}

const ProfilePageContent = () => {
  return <div>Profile Page</div>
}

// Apply the middleware to the page
async function getServerSideProps(context: NextPageContext) {
  const response = await fetch("http://localhost:3000/api/product")
  const products: Product = await response.json()

  return {
    props: {
      products,
    },
  }
}

const ProfilePage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login if no token is found
    const token = getTokenFromLocalStorage()
    if (!token) {
      router.push("/login")
    }
  }, [])

  return <ProfilePageContent />
}

export default authenticateMiddleware(getServerSideProps)
