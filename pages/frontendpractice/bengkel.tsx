import React from "react"
import img1 from "../../public/image/ableton.jpg"
import Image from "next/image"
import images from "@/constant/image"

const bengkel = () => {
  return (
    <>
      <div className="box-border relative block w-full pt-[8vw] pb-[8vw] flex">
        <div className="bg-lime-500 absolute w-[58vw] h-[58vw] left-[41vw]"></div>
        <div className="bg-blue-500 w-[41vw] h-[41vw] ml-[8vw] z-10 inline-block relative "></div>
      </div>
    </>
  )
}

export default bengkel

{
  /* <section className=" border-2 h-screen border-black bg-slate-600  grid grid-cols-10 grid-rows-[10]">
  <div className="ml-20 img1 bg-teal-200 col-start-1 col-end-7 row-start-1 row-end-7  ">
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
        src={img1.src}
        width={450}
        height={300}
        alt="oke"
        className="overflow-hidden rounded-xl bg-current"
      />
    </div>
  </div>
</section> */
}
