import Dropdown from "@/component/Dropdown"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

interface FormValues {
  IdCategory: number
  nameVariant: string
  Description: string
  Id: string
}

interface Category {
  Id: number
  NameCategory: string
  Description: string
  IsDelete: boolean
  CreateBy: string
  CreatedDate: string
  UpdateBy: string
  UpdateDate: string
}

interface CreateProps {}

const VariantPage: NextPage<CreateProps> = ({}) => {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [categories, setCategories] = useState<Category[]>([])
  const [formValues, setFormValues] = useState<FormValues>({
    Id: "",
    IdCategory: 0,
    nameVariant: "",
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

    try {
      // Make API request to create a new post using the formData
      console.log(JSON.stringify(formValues))
      const response = await fetch("/api/variant", {
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
        router.push("/variants")
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

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategory(categoryId)
    setFormValues((prevValues) => ({
      ...prevValues,
      IdCategory: categoryId,
    }))
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category")
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories", error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="w-auto flex justify-center">
      <form
        method="PUT"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Form fields */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="IdCategory"
          >
            Category
          </label>
          <Dropdown
            datas={categories}
            handleSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nameVariant"
          >
            Name Variant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nameVariant"
            name="nameVariant"
            type="text"
            value={formValues.nameVariant}
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

        {/* Submit button */}
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

export default VariantPage
