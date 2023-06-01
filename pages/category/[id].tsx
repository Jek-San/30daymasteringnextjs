import Modal from "@/component/Modal"
import { Category } from "@/interfaces/interfaces"
import { GetServerSideProps, NextPage } from "next"
import { EventHandler, useEffect, useState } from "react"
interface FormValues {
  nameCategory: string
  Description: string
}
interface CategoryPageProps {
  category: Category
}

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    nameCategory: category.NameCategory,
    Description: category.Description,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <div className="w-auto flex justify-center ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nameCategory"
          >
            Name Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nameCategory"
            name="nameCategory"
            type="text"
            placeholder="Username"
            value={formValues.nameCategory}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Description"
            type="text"
            name="Description"
            placeholder="******************"
            value={formValues.Description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async ({ params }) => {
  const { id } = params ?? {}

  const response = await fetch(`http://localhost:3000/api/category/${id}`)
  const category = await response.json()

  return {
    props: {
      category,
    },
  }
}
