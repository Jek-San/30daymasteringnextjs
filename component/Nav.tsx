import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("")
  const router = useRouter()

  return (
    <nav className="bg-slate-500 bg-opacity-30 w-max-content fixed z-20 left-1/2 transform  -translate-x-1/2 top-2 flex gap-2 p-2 rounded-full backdrop-filter backdrop-blur-lg ">
      <Link
        href={"/"}
        className={`${
          router.pathname === "/" ? "bg-indigo-800" : "bg-transparent"
        } p-4 rounded-full text-light text-lg`}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href={"/category"}
        className={`${
          router.pathname === "/category" ? "bg-indigo-800" : "bg-transparent"
        } p-4 rounded-full text-light text-lg`}
      >
        <AiOutlineUser />
      </Link>

      <a
        href="#experience"
        className={`${
          activeNav === "#experience" ? "bg-indigo-800" : "bg-transparent"
        } p-4 rounded-full text-light text-lg`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={`${
          activeNav === "#services" ? "bg-indigo-800" : "bg-transparent"
        } p-4 rounded-full text-light text-lg`}
      >
        <RiServiceLine />
      </a>
      <Link
        href={"/cssonly"}
        className={`${
          router.pathname === "/cssonly" ? "bg-indigo-800" : "bg-transparent"
        } p-4 rounded-full text-light text-lg`}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}

export default Nav
