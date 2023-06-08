import { createContext, useState, useEffect, useContext } from "react"

// Define the shape of the authentication context
type AuthContextType = {
  user: null | string
  login: (email: string, password: string) => void
  logout: () => void
}

// Create the authentication context
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext)
}

// Authentication provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<null | string>(null)

  useEffect(() => {
    // Check if the user is already authenticated (e.g., via stored tokens)
    const authenticatedUser = localStorage.getItem("user")
    if (authenticatedUser) {
      setUser(authenticatedUser)
    }
  }, [])

  // Handle login
  const login = (email: string, password: string) => {
    // Perform login logic here, e.g., send data to an API
    // Once the login is successful, update the user state and store user information
    setUser(email)
    localStorage.setItem("user", email)
  }

  // Handle logout
  const logout = () => {
    // Perform logout logic here, e.g., clear stored tokens
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
