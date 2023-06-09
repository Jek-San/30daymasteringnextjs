import Modal from "@/component/Modal"
import { tblvariant, tblcategory, tblproduct } from "@prisma/client"
import { error } from "console"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { EventHandler, useEffect, useState } from "react"

interface FormValues extends tblproduct {}

interface Variant extends tblvariant {}
interface ProductPageProps {
  product: tblproduct
}

const CategoryPage: NextPage<ProductPageProps> = ({ product }) => {
  const router = useRouter()

  const [formValues, setFormValues] = useState<FormValues>({
    Id: product.Id,
    NameProduct: product.NameProduct,
    IdVariant: 0,
    Image: "",
    Price: 0,
    UpdateBy: "Admin",
    UpdateDate: new Date(),
    Stock: "",
    CreateBy: "",
    CreatedDate: new Date(),
    IsDelete: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const submitForm = async (e: any) => {
    e.preventDefault()
    console.log("test")
    try {
      // Make API request to create a new post using the formData
      console.log(JSON.stringify(formValues))
      const response = await fetch("/api/product", {
        method: "PUT",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(formValues)
      if (response.ok) {
        // Handle successful form submission
        console.log("Post Edit successfully!")
        // Redirect or perform any necessary actions
      } else {
        // Handle error case
        console.error("Failed to create post")
      }
    } catch (error) {
      // Handle error case
      console.error("Failed to create post", error)
    }
  }

  return (
    <div className="w-auto flex justify-center ">
      <form
        method="PUT"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4" hidden>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Id"
          >
            IdVariant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Id"
            name="Id"
            type="text"
            value={formValues.Id ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4" hidden>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="IdVariant"
          >
            IdVariant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="IdVariant"
            name="IdVariant"
            type="text"
            value={formValues.IdVariant ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="NameProduct"
          >
            Name Product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NameProduct"
            name="NameProduct"
            type="text"
            placeholder=""
            value={formValues.NameProduct ?? " "}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Price"
            name="Price"
            type="number"
            placeholder="10000"
            value={formValues.Price ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Stock"
            type="text"
            name="Stock"
            placeholder=""
            value={formValues.Stock ?? " "}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitForm}
          >
            Save
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              router.back()
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  params,
}) => {
  const { id } = params ?? {}

  const response = await fetch(`http://localhost:3000/api/product/${id}`)
  const product = await response.json()

  return {
    props: {
      product,
    },
  }
}
