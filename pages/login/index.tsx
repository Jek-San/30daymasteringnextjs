import axios, { AxiosError } from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email,
      userName,
      password,
    }
    // Perform registration logic using the API route '/api/auth/register'
    try {
      const response = await axios.post("/api/auth/login", data)
      toast("Login sucsecfully")
      console.log("Login successful:")
      // Assuming you have received the token as 'jwtToken'
      localStorage.setItem("token", response.data.token)
      sessionStorage.setItem("token", response.data.token)

      // Redirect or perform any other action after successful registration
      router.push("/")
    } catch (error) {
      toast("Login Failed, Please check Your Email Or Password")
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 409) {
          console.log("Email or username is False")
        } else {
          console.log("Error during Login:", axiosError.message)
        }
      } else {
        console.log("Error during Login:", error)
      }
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  bg-slate-900">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="bg-white p-8 rounded-xl shadow-md mt-24">
          <h2 className="text-black text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-medium mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-black font-medium mb-2"
              >
                Username:
              </label>
              <input
                id="userName"
                type="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black font-medium mb-2"
              >
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
