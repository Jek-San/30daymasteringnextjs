interface Post {
  id: number
  title: string
}

interface Product{
  id: number
  name: string
  descriprion:string
  
}

const posts: Post[] = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
  { id: 3, title: "Third Post" },
]

const products: Product[] = [
  {
    id: 1,
    name: "Cappucinno",
    descriprion:"Produk Minuman Sachet yang memuliki cita rasa kopi dan susu"
  },
  {
    id: 2,
    name: "Nutrisari",
    descriprion:"Produk Minuman Sachet yang memiliki cita rasa jeruk asli"
  },
  {
    id: 3,
    name: "Kuku Bima",
    descriprion:"Produk Minuman Sachet yang memberikan semangat pada hari mu"
  },
]



export default {posts, products}
