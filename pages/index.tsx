import Image from "next/image"
import { Inter } from "next/font/google"
import NavCssOnly from "@/component/NavCssOnly"
import images from "@/constant/image"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const kota = images.header

  return (
    <>
      <nav className="flex justify-between  items-center md:w-full text-white  bg-[#069AA6] md:pt-3 md:pr-20 md:pl-16 md:pb-10">
        <div className="left ">
          <svg
            width="130"
            height="37"
            viewBox="0 0 171 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_464_16930)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M171.001 7.01406C171.001 6.40223 170.819 5.80414 170.479 5.29544C170.139 4.78674 169.656 4.39028 169.091 4.15621C168.526 3.92214 167.904 3.86097 167.304 3.98044C166.704 4.09992 166.152 4.39466 165.72 4.8274C165.287 5.26013 164.993 5.81143 164.874 6.41154C164.755 7.01165 164.816 7.63363 165.05 8.19881C165.285 8.76398 165.681 9.24696 166.19 9.58666C166.699 9.92636 167.297 10.1075 167.909 10.1072C168.315 10.1074 168.718 10.0275 169.093 9.87217C169.468 9.7168 169.809 9.48896 170.097 9.2017C170.384 8.91443 170.612 8.57336 170.767 8.19799C170.923 7.82262 171.002 7.42032 171.002 7.01406"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M83.1836 21.9988L89.216 13.4326H94.9152L88.3911 22.4392L96.0056 32.622H90.3909L83.1775 23.1585V32.622H78.2279V5.80908L83.1836 5.83171V21.9988ZM101.375 15.1474C101.732 14.7927 102.122 14.474 102.542 14.1958C103.585 13.4839 104.854 13.2215 106.161 13.2215C106.377 13.2215 106.594 13.229 106.811 13.2366C107.028 13.2441 107.212 13.2683 107.415 13.2984L108.668 13.5548L107.864 17.8228L107.253 17.6825C107.101 17.646 106.945 17.6277 106.789 17.6282H106.294C105.703 17.6254 105.116 17.7062 104.548 17.868C104.02 18.0199 103.535 18.2926 103.131 18.6643C102.675 19.1156 102.33 19.6671 102.124 20.275C101.822 21.109 101.738 22.1149 101.738 23.0273V32.6295H96.7823V13.4161L101.065 13.4402C101.189 14.0118 101.298 14.5607 101.375 15.1474ZM62.7922 20.8164C63.4332 18.4351 65.356 17.2437 67.7012 17.2437C70.1911 17.2437 71.9691 18.4351 72.2542 20.8164H62.7922ZM76.4136 24.5867C77.0953 17.025 73.4305 13.2291 67.5549 13.2291C61.8647 13.2291 58.2392 17.2497 58.2392 22.8403C58.2392 28.722 61.8255 32.628 67.8791 32.628C70.547 32.628 73.5693 31.6613 75.4197 29.651L72.6448 26.7856C71.6555 27.8684 69.5516 28.5018 67.9515 28.5018C64.89 28.5018 63.0034 26.864 62.7259 24.5897L76.4136 24.5867ZM141.313 26.7599C140.455 27.7734 139.171 28.4536 137.462 28.4536C134.556 28.4536 132.229 26.3889 132.229 22.9172C132.229 19.4455 134.556 17.4277 137.462 17.4277C139.24 17.4277 140.563 18.1621 141.421 19.26C142.055 20.0639 142.433 21.3322 142.477 22.6307C142.527 24.2097 142.094 25.8339 141.313 26.7599ZM142.287 15.7416C141.15 14.2968 139.156 13.407 137.069 13.407C131.903 13.3768 127.845 16.654 127.845 22.9172C127.845 29.2966 131.727 32.613 136.96 32.5692C138.707 32.5391 141.073 31.7277 142.287 30.0642V32.5692H147.042V13.8579H142.287V15.7416ZM112.862 20.8164C113.504 18.4351 115.426 17.2437 117.772 17.2437C120.268 17.2437 122.046 18.4351 122.325 20.8164H112.862ZM126.492 24.5867C127.165 17.025 123.5 13.2291 117.632 13.2291C111.942 13.2291 108.309 17.2497 108.309 22.8403C108.309 28.722 111.904 32.628 117.949 32.628C120.624 32.628 123.646 31.6613 125.489 29.651L122.713 26.7856C121.716 27.8684 119.621 28.5018 118.021 28.5018C114.96 28.5018 113.073 26.864 112.786 24.5897L126.492 24.5867ZM46.8468 10.5159C49.94 10.5159 51.3154 12.665 51.3154 14.8216C51.3154 16.9782 49.9702 19.1288 46.8468 19.1288H43.1761V10.5099L46.8468 10.5159ZM52.9246 21.7967C55.3511 20.1378 56.2334 17.4126 56.2334 14.7085C56.2334 10.062 52.9939 5.81814 46.8468 5.81814H38.2656V32.622H43.1761V23.6773H44.6359C45.4865 23.6773 46.2677 23.6849 47.0414 23.6532L54.6484 32.622H60.7472L52.0348 22.3547C52.344 22.1767 52.638 21.9912 52.9246 21.7892V21.7967ZM156.017 28.7084H149.562V32.5813H156.017C161.003 32.5587 163.515 29.829 163.515 26.6589C163.515 21.8661 159.303 21.0999 155.985 20.8843C153.737 20.7335 152.7 20.0714 152.7 18.9041C152.7 17.7836 153.813 17.126 155.839 17.111H161.423V13.4085H155.834C152.627 13.4085 148.413 14.8774 148.413 19.0459C148.413 23.1435 152.379 24.3877 155.696 24.6425C158.193 24.7933 159.19 25.3001 159.19 26.5458C159.187 27.8594 157.653 28.7416 156.009 28.7024L156.017 28.7084ZM163.438 17.111L163.401 13.4146H168.34C169.886 13.4146 170.659 13.6001 170.567 15.5259L170.62 32.5813H165.743L165.704 19.0082V17.1079L163.438 17.111Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.23494 26.1253C1.23366 22.9582 1.50411e-05 19.4458 1.50411e-05 15.8882C-0.00328376 13.4956 0.536077 11.1335 1.57751 8.97946C3.63327 7.65285 5.90188 6.6897 8.28413 6.13212C14.9108 4.624 24.5915 6.69767 24.8132 15.1039C24.9549 20.491 18.0492 24.5086 14.6876 17.799C11.2099 24.7243 23.9234 29.401 27.9214 20.6086C33.4668 8.41391 18.4112 -4.59365 4.00106 5.34488C6.13929 2.93276 8.96075 1.22821 12.0907 0.457642C15.2206 -0.312928 18.511 -0.113054 21.5246 1.03071C24.5383 2.17448 27.1327 4.20801 28.9632 6.86122C30.7937 9.51443 31.7738 12.6618 31.7731 15.8852C31.7731 20.589 29.6165 25.2219 26.3801 29.0601C22.2403 28.7887 18.9345 27.8853 16.9181 26.7587C9.23878 22.4666 13.8386 13.5672 17.6073 14.5173C18.8335 14.8265 19.126 16.0707 18.663 16.9303C18.3162 17.5758 17.541 18.0071 16.4174 17.6693C19.0039 20.9449 22.4364 17.1113 21.9824 14.0287C21.0881 7.966 8.17404 11.0803 9.59469 22.5752C10.1014 26.6758 14.6017 31.8682 20.9946 34.0369C19.6596 34.9977 18.2414 35.837 16.7568 36.5449C3.51243 29.5141 3.39178 11.9882 16.4084 8.88143C5.57856 5.78978 0.508252 16.5623 3.23795 26.1268"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_464_16930">
                <rect width="171" height="36.5433" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="right">
          <ul className="flex space-x-3">
            <li className="list-none">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Kenapa Rekreasi</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Kontak</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="xl:h-[120vh] md:h-[120vh] h-screen relative w-full bg-[#069AA6]
       pt-8"
      >
        <div
          className=" absolute h-full bottom-0 w-full bg-[#069AA6]  bg-headerimg md:bg-bottom bg-right-bottom bg-cover 
                        md:bg-contain bg-no-repeat
                           "
        ></div>

        <div className="container relative max-w-4xl  mx-auto bg-[#069AA6] md:bg-none ">
          <p className=" text-white items-center text-center font-poppins font-bold text-2xl px-14">
            Temukan Keindahan Alam Terbaik Dunia
          </p>
        </div>
        <div className="container relative max-w-xs  mx-auto mt-8 ">
          <p className=" text-white items-center text-center font- first-letter: font-normal text-sm">
            Saat Anda bepergian, apakah Anda ingin memastikan hotel Anda
            memiliki kolam renang yang bagus? Di sini solusinya.
          </p>
        </div>
        <div
          className="container   w-3/4 h-auto -bottom-16 mx-auto bg-white rounded-xl relative  
        md:max-w-4xl
        mt-8 p-8"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4
          "
          >
            <div>
              <div className="relative location text-xs  ">
                <span>
                  <svg
                    className="absolute float-left -left-6  "
                    width="21"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                Dimana kamu ingin menginap?
              </div>
              <div className="font-bold mt-1">
                <p className="text-[.8rem]">Yogyakarta, Jawa Tengah🔻</p>
              </div>
            </div>
            <div>
              <div className="relative location text-xs  ">
                <span>
                  <svg
                    className="absolute float-left -left-6  "
                    width="21"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                Dimana kamu ingin menginap?
              </div>
              <div className="font-bold">
                <p className="text-[.8rem]">Yogyakarta, Jawa Tengah🔻</p>
              </div>
            </div>{" "}
            <div>
              <div className="relative location text-xs  ">
                <span>
                  <svg
                    className="absolute float-left -left-6  "
                    width="21"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                Dimana kamu ingin menginap?
              </div>
              <div className="font-bold">
                <p className="text-[.8rem]">Yogyakarta, Jawa Tengah🔻</p>
              </div>
            </div>
            <div className="button w-full">
              <div className="  bg-red-500 p-1 px-5 rounded-full text-center ">
                Cari
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container relative max-w-4xl  mx-auto  md:bg-none mt-7 ">
        <p className=" text-black items-center text-center font-poppins font-bold text-2xl px-14">
          Destinasi Populer Di Indonesia
        </p>
      </div>
      <div className="container relative max-w-xs  mx-auto mt-4 ">
        <p className=" text-black items-center text-center font- first-letter: font-normal text-sm">
          Temukan dan pesan pengalaman hebat
        </p>
      </div>

      <div className="w-auto grid grid-cols-2  gap-1 mx-2 mt-5">
        <div className="location bg-slate-500 text-center ">
          <div className="photo bg-blue-600 rounded-full h-16 w-16 mx-auto"></div>
          <div className="location">Jakarta</div>
          <div className="acomodation">12.777 akomodasi</div>
        </div>
        <div className="location text-center ">
          <div className="photo bg-blue-600 rounded-full h-16 w-16 mx-auto "></div>

          <div className="location">Jakarta</div>
          <div className="acomodation">12.777 akomodasi</div>
        </div>
      </div>

      <div className="container relative max-w-4xl  mx-auto  md:bg-none  mt-7">
        <p className=" text-black items-center text-center font-poppins font-bold text-2xl px-14">
          Rekomendasi Hotel Untuk Liburan
        </p>
      </div>
      <div className="container relative max-w-xs  mx-auto mt-4 ">
        <p className=" text-black items-center text-center font- first-letter: font-normal text-sm">
          Kamu bisa lihat to destinasi
        </p>
      </div>

      <div className=" mt-6 container flex justify-center items-center w-auto">
        <div className="text-center w-1/4 rounded-full bg-red-500 text-lg ">
          Jakarta
        </div>
        <div className="text-center text-lg rounded-full w-1/3 mx-1">
          Bandung
        </div>
        <div className="text-center text-lg w-1/3">Yogyakarta</div>
      </div>

      {/* test slider */}
      <div className="container flex flex-col w-full my-5">
        <div className="container  w-full grid grid-flow-col place-self-center h-auto   overflow-x-scroll no-scrollbar  gap-2 ">
          <div className="w-80  ">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                className="w-full  object-cover rounded-md aspect-square"
                src={"/image/kota/semarang.jpg"}
                alt="Image 2"
                width={100}
                height={100}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold">The Grand Resort</h4>
              </div>
              <div className="flex items-center gap-4 justify-start">
                <div className="rating flex justify-end items-center gap-2">
                  <div className="logo-rating">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.69025 1.02866L11.1328 3.86713L14.3711 4.32413C15.8881 4.53815 16.5816 6.41022 15.4121 7.5165L13.0861 9.71492L13.6335 12.8127C13.9139 14.3995 12.2296 15.4653 10.9033 14.7895L7.99985 13.3085L5.09726 14.7891C3.76902 15.467 2.08615 14.3977 2.36617 12.8127L2.91361 9.71492L0.587917 7.51681C-0.582388 6.40972 0.11351 4.53806 1.62847 4.32416L4.86707 3.86711L6.31028 1.02866C7.00731 -0.342828 8.99333 -0.342947 9.69025 1.02866Z"
                        fill="#FFD166"
                      />
                    </svg>
                  </div>
                  <div className="rating">4.8</div>
                </div>
                <div className="location flex justify-start items-center">
                  <div className="icon-location">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.7467 5.63341C13.0467 2.55341 10.3601 1.16675 8.00006 1.16675C8.00006 1.16675 8.00006 1.16675 7.9934 1.16675C5.64006 1.16675 2.94673 2.54675 2.24673 5.62675C1.46673 9.06675 3.5734 11.9801 5.48006 13.8134C6.18673 14.4934 7.0934 14.8334 8.00006 14.8334C8.90673 14.8334 9.8134 14.4934 10.5134 13.8134C12.4201 11.9801 14.5267 9.07341 13.7467 5.63341Z"
                        fill="#777E90"
                      />
                      <path
                        d="M8.00039 8.97344C9.16019 8.97344 10.1004 8.03324 10.1004 6.87344C10.1004 5.71364 9.16019 4.77344 8.00039 4.77344C6.84059 4.77344 5.90039 5.71364 5.90039 6.87344C5.90039 8.03324 6.84059 8.97344 8.00039 8.97344Z"
                        fill="#777E90"
                      />
                    </svg>
                  </div>
                  <div className="text-location">Yogyakarta</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-700">Harga per malam mulai dari </p>
                <p className="harga text-[#CF3F37] font-bold text-2xl">
                  Rp.1.790.000
                </p>
              </div>
            </div>
          </div>
          <div className="w-80 h-full ">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                className="w-full  object-cover rounded-md aspect-square"
                src={"/image/kota/semarang.jpg"}
                alt="Image 2"
                width={100}
                height={100}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold">The Grand Resort</h4>
              </div>
              <div className="flex items-center gap-4 justify-start">
                <div className="rating flex justify-end items-center gap-2">
                  <div className="logo-rating">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.69025 1.02866L11.1328 3.86713L14.3711 4.32413C15.8881 4.53815 16.5816 6.41022 15.4121 7.5165L13.0861 9.71492L13.6335 12.8127C13.9139 14.3995 12.2296 15.4653 10.9033 14.7895L7.99985 13.3085L5.09726 14.7891C3.76902 15.467 2.08615 14.3977 2.36617 12.8127L2.91361 9.71492L0.587917 7.51681C-0.582388 6.40972 0.11351 4.53806 1.62847 4.32416L4.86707 3.86711L6.31028 1.02866C7.00731 -0.342828 8.99333 -0.342947 9.69025 1.02866Z"
                        fill="#FFD166"
                      />
                    </svg>
                  </div>
                  <div className="rating">4.8</div>
                </div>
                <div className="location flex justify-start items-center">
                  <div className="icon-location">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.7467 5.63341C13.0467 2.55341 10.3601 1.16675 8.00006 1.16675C8.00006 1.16675 8.00006 1.16675 7.9934 1.16675C5.64006 1.16675 2.94673 2.54675 2.24673 5.62675C1.46673 9.06675 3.5734 11.9801 5.48006 13.8134C6.18673 14.4934 7.0934 14.8334 8.00006 14.8334C8.90673 14.8334 9.8134 14.4934 10.5134 13.8134C12.4201 11.9801 14.5267 9.07341 13.7467 5.63341Z"
                        fill="#777E90"
                      />
                      <path
                        d="M8.00039 8.97344C9.16019 8.97344 10.1004 8.03324 10.1004 6.87344C10.1004 5.71364 9.16019 4.77344 8.00039 4.77344C6.84059 4.77344 5.90039 5.71364 5.90039 6.87344C5.90039 8.03324 6.84059 8.97344 8.00039 8.97344Z"
                        fill="#777E90"
                      />
                    </svg>
                  </div>
                  <div className="text-location">Yogyakarta</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-700">Harga per malam mulai dari </p>
                <p className="harga text-[#CF3F37] font-bold text-2xl">
                  Rp.1.790.000
                </p>
              </div>
            </div>
          </div>
          <div className="w-80 h-full ">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                className="w-full  object-cover rounded-md aspect-square"
                src={"/image/kota/semarang.jpg"}
                alt="Image 2"
                width={100}
                height={100}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold">The Grand Resort</h4>
              </div>
              <div className="flex items-center gap-4 justify-start">
                <div className="rating flex justify-end items-center gap-2">
                  <div className="logo-rating">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.69025 1.02866L11.1328 3.86713L14.3711 4.32413C15.8881 4.53815 16.5816 6.41022 15.4121 7.5165L13.0861 9.71492L13.6335 12.8127C13.9139 14.3995 12.2296 15.4653 10.9033 14.7895L7.99985 13.3085L5.09726 14.7891C3.76902 15.467 2.08615 14.3977 2.36617 12.8127L2.91361 9.71492L0.587917 7.51681C-0.582388 6.40972 0.11351 4.53806 1.62847 4.32416L4.86707 3.86711L6.31028 1.02866C7.00731 -0.342828 8.99333 -0.342947 9.69025 1.02866Z"
                        fill="#FFD166"
                      />
                    </svg>
                  </div>
                  <div className="rating">4.8</div>
                </div>
                <div className="location flex justify-start items-center">
                  <div className="icon-location">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.7467 5.63341C13.0467 2.55341 10.3601 1.16675 8.00006 1.16675C8.00006 1.16675 8.00006 1.16675 7.9934 1.16675C5.64006 1.16675 2.94673 2.54675 2.24673 5.62675C1.46673 9.06675 3.5734 11.9801 5.48006 13.8134C6.18673 14.4934 7.0934 14.8334 8.00006 14.8334C8.90673 14.8334 9.8134 14.4934 10.5134 13.8134C12.4201 11.9801 14.5267 9.07341 13.7467 5.63341Z"
                        fill="#777E90"
                      />
                      <path
                        d="M8.00039 8.97344C9.16019 8.97344 10.1004 8.03324 10.1004 6.87344C10.1004 5.71364 9.16019 4.77344 8.00039 4.77344C6.84059 4.77344 5.90039 5.71364 5.90039 6.87344C5.90039 8.03324 6.84059 8.97344 8.00039 8.97344Z"
                        fill="#777E90"
                      />
                    </svg>
                  </div>
                  <div className="text-location">Yogyakarta</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-700">Harga per malam mulai dari </p>
                <p className="harga text-[#CF3F37] font-bold text-2xl">
                  Rp.1.790.000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-more  mx-auto bg-[#FC3C5C] rounded-xl w-1/2 py-8 text-2xl font-poppins text-white text-center">
          Lihat Semua
        </div>
      </div>

      <div className="container  mx-auto text-3xl text-center tracking-widest my-5 font-bold">
        Promosi Akomodasi
      </div>
      <div className="relative container w-11/12 h-[250px] rounded-md mx-auto bg-bgpromo bg-cover bg-gray-700 bg-blend-overlay  ">
        <div className="container w-12/12 px-1 flex mx-auto">
          <div className="diskon w-5/12 mt-5  text-white text-sm">
            <p className="bg-[#5392F9] text-white   rounded-full text-center px-3 py-1 ">
              Diskon Hingga
            </p>
            <div className="relative mb-5">
              <p className="text-9xl font-bold textShadow ">50</p>
              <p className="absolute text-xs -right-3 bottom-3 bg-yellow-400 rounded-full px-2 py-1 ">
                %
              </p>
            </div>
            <div className="bg-[#5392F9] text-white rounded-full text-center px-3 py-4 hover:cursor-pointer hover:bg-blue-700">
              Coba Sekarang
            </div>
          </div>
          <div className="extradiskonhingga w-7/12  mt-5  text-white text-sm ml-2">
            <p className="bg-[#5392F9] text-white   rounded-full text-center px-3 py-1 ">
              Diskon Hingga
            </p>

            <p className="text-9xl font-bold textShadow relative text-center">
              50{" "}
              <span className="absolute text-xs -right-3 bottom-3 bg-yellow-400 rounded-full px-2 py-1 ">
                %
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
