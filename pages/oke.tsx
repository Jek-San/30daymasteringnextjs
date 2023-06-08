import { FC, useEffect, useState } from "react"
import { getAllUsers } from "./api/auth"
import { tblusers } from "@prisma/client"
import { GetServerSideProps } from "next"
interface User extends tblusers {}
interface OkeProps {
  usersData: any[]
}

const Oke: FC<OkeProps> = ({ usersData }) => {
  return (
    <>
      {usersData.map((user) => (
        <h1 key={user.Id}>{user.Username}</h1>
      ))}
    </>
  )
}

export default Oke

export const getServerSideProps: GetServerSideProps<OkeProps> = async ({}) => {
  try {
    const usersData = await getAllUsers()
    const stringifiedUsersData = JSON.stringify(usersData)
    const parsedUsersData = JSON.parse(stringifiedUsersData)
    return {
      props: {
        usersData: parsedUsersData,
      },
    }
  } catch (error) {
    console.error("Error fetching users:", error)
    return {
      props: {
        usersData: [],
      },
    }
  }
}
