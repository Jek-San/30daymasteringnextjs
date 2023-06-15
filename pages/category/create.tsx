import Modal from "@/component/Modal"
import { Category } from "@/interfaces/interfaces"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { EventHandler, useEffect, useState } from "react"
interface FormValues {
  nameCategory: string
  Description: string
  Id: string
}
interface CreateProps {}

const CategoryPage: NextPage<CreateProps> = ({}) => {
  const router = useRouter()

  const [formValues, setFormValues] = useState<FormValues>({
    Id: "",
    nameCategory: "",
    Description: "",
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
      const response = await fetch("/api/category", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        // Handle successful form submission
        console.log("Post created successfully!")
        // Redirect to the home page
        router.push("/category")
        // You can also use router.replace("/") if you want to replace the current history entry
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
    <div className="flex justify-center ">
      <form
        method="PUT"
        className="justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4" hidden>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Id"
          >
            Id
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Id"
            name="Id"
            type="text"
            value={formValues.Id}
            onChange={handleInputChange}
          />
        </div>
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
            value={formValues.nameCategory}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Description"
            type="text"
            name="Description"
            placeholder=""
            value={formValues.Description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitForm}
          >
            Add
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
