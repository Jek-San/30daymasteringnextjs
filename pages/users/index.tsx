import { GetStaticProps } from "next"
import Link from "next/link"
import { FC } from "react"



interface UsersPageProps {
  users: any
}

const UsersPage: FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user: any) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div className="">
            <h3>{user.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { users: data },
  }
}
export default UsersPage
