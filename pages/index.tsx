import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <section className="flex justify-center  h-screen bg-indigo-700 text-black">
        <div className=" bg-red-700 rounded-lg mt-20 hover:bg-red-500">OKe</div>
      </section>
    </>
  )
}
