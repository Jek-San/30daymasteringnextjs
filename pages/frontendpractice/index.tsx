import Head from "next/head"
import Image from "next/image"
import { FC } from "react"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>FrontEnd Practice</title>
      </Head>
      <nav className="h-11   flex justify-between items-center mx-3 text-sm bg-white  text-black">
        <div className="flex  justify-center items-center gap-2 font-semibold">
          <div className="logo">Logo</div>
          <div className="Live">Live</div>
          <div className="push">Push</div>
          <div className="div">Note</div>
          <div className="div">Link</div>
          <div className="div">Shop</div>
          <div className="div">Packs</div>
          <div className="div">Help</div>
          <div className="div">More +</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="">Try Live for Free</div>
          <div className="">Account</div>
          <div className="">Log Out</div>
        </div>
      </nav>
      <hr className=" mr-4 " />
      <nav className="h-11   flex justify-between items-center mx-3 text-sm bg-white  text-black">
        <div className="flex justify-start items-center text-xs gap-2 font-light">
          <div className="div">About</div>
          <div className="div">Jobs</div>
          <div className="div">Apprenticeships</div>
        </div>
      </nav>

      <div className="h-fit bg-slate-500 text-black ">
        <div className=" bg-hero-pattern bg-cover bg-center  h-[700px] flex justify-center items-center mx-16 mb-20 ">
          <span className="text-white text-3xl  sm:text-8xl">Abbleton</span>
        </div>
        <div className="mx-16 mb-3 text-3xl">
          We make{" "}
          <a className="text-blue-700" href="/frontendpractice">
            Live
          </a>
          ,{" "}
          <a className="text-blue-700" href="/frontendpractice">
            Push{" "}
          </a>
          and{" "}
          <a className="text-blue-700" href="">
            Link
          </a>{" "}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </div>
        <div className="mx-16  text-2xl font-light">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </div>
      </div>

      {/* <section className=" border-2 h-screen grid grid-cols-10 grid-rows-[10]">
        <div className="ml-20  img1 bg-teal-200 col-start-1 col-end-7 row-start-1 row-end-7  ">
          <div className="h-screen grid grid-cols-3 grid-rows-2  ">
            <div className="col-start-2 col-end-3 row-span-1 self-center  ">
              <Image
                src="/image/pexels-cottonbro-studio.jpg"
                alt=""
                width={200}
                height={200}
                className="aspect-square"
              />
            </div>
            <div className="col-start-2 col-end-3 row start-2 row-end-3 self-center">
              <Image
                src="/image/pexels-cottonbro-studio.jpg"
                alt=""
                width={200}
                height={200}
                className="aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="img3 bg-transparent  col-start-5 col-end-10 row-start-2 row-end-6 place-self-end self-center ">
          <div className="    ">
            <Image
              src="/image/pexels-cottonbro-studio.jpg"
              width={450}
              height={300}
              alt="oke"
              className="overflow-hidden rounded-xl bg-current"
            />
          </div>
        </div>
      </section> */}
      {/* <section className="h-[120vh] w-[100vw]  grid grid-cols-3  bg-blue-500 text-black mt-[3rem]  ">
        <div className="h-full  col-start-1 col-end-2 bg-white z-50">
          <div className=" h-[55%] translate-x-[30%] translate-y-[50%] bg-hotang bg-cover"></div>
        </div>
        <div className="h-full col-span-2 content-center bg-[#fbffa7]">
          <div className=" h-[40%] z-40  bg-fcottonbro bg-cover  translate-y-[55vh] translate-x-[40vh] aspect-square"></div>
        </div>
      </section> */}
    </>
  )
}

export default index
