import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

interface UserPageProps {
  user: any
}

const UserPage: NextPage<UserPageProps> = ({ user }) => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>{user.id}</h1>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </>
  )
}

export default UserPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const dataUsers = await res.json()
  const paths = dataUsers.map((path: any) => ({
    params: {
      id: path.id.toString(),
    },
  }))
  console.log("paths", paths)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params ?? {}
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
    console.log(user)
    return { props: { user } }
  } catch (error) {
    console.error("Error on fetching Data", error)
  }
  return { props: { user: null } }
}
