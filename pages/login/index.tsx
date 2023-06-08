import { GetServerSideProps } from "next"
import { FC, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

interface indexProps {
  data: any[]
}

const index: FC<indexProps> = ({}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onLogin = () => {}

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const response = await axios.post("/api/auth", { username, password })
      if (response.data.success) {
        setError("")
        // Perform any necessary actions after successful login
        router.push("/")
      } else {
        setError("Invalid username or password")
      }
    } catch (error) {
      setError("An error occurred during login")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="text-black"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default index
