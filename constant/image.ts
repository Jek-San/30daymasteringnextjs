import { StaticImageData } from "next/image"

interface DataImage {
  id: number
  name: string
  path: string
}
interface Images {
  header: DataImage[]
  random: DataImage[]
}

const images: Images = {
  random: [
    {
      id: 1,
      name: "ableton",
      path: "image/ableton.jpg",
    },
    {
      id: 2,
      name: "cottonbro",
      path: "/image/pexels-cottonbro-studio.jpg",
    },
    {
      id: 3,
      name: "hotang",
      path: "/image/pexels-hồ-thành.jpg",
    },
  ],
  header: [
    {
      id: 1,
      name: "Semarang",
      path: "/image/kota/semarang.jpg",
    },
    {
      id: 2,
      name: "Jakarta",
      path: "/image/kota/jakarta.jpg",
    },
    {
      id: 3,
      name: "Surabaya",
      path: "/image/kota/surabaya.jpg",
    },
    {
      id: 4,
      name: "Yogyakarta",
      path: "/image/kota/yogyakarta.jpg",
    },
  ],
}

export default images
