import Dropdown from "@/component/Dropdown"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { tblproduct, tblcategory, tblvariant } from "@prisma/client"

interface FormValues extends tblproduct {
  ImagePath?: File | null
}
interface Category extends tblcategory {}

interface CreateProps {
  handleSelectCategory: (selectedValue: Category) => void
  selectedCategory: Category | null
}

const VariantPage: NextPage<CreateProps> = ({}) => {
  const router = useRouter()
  const [selectedVariant, setSelectedVariant] = useState<tblvariant | null>(
    null
  )
  const [variant, setVariant] = useState<tblvariant[]>([])
  const [formValues, setFormValues] = useState<FormValues>({
    Id: "",
    NameProduct: "",
    IdVariant: 0,
    Image: "",
    Price: 0,
    UpdateBy: "Admin",
    UpdateDate: new Date(),
    Stock: "",
    CreateBy: "",
    CreatedDate: new Date(),
    IsDelete: false,
    ImagePath: null,
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
        router.push("/variant")
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

  // const handleSelectCategory = (categoryId: number) => {
  //   setSelectedCategory(categoryId)
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     IdCategory: categoryId,
  //   }))
  // }
  // const handleSelectCategory = (selectedValue: tblvariant) => {
  //   setSelectedVariant(selectedValue)
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     IdVariant: parseInt(selectedValue.Id),
  //   }))
  //   console.log(formValues)
  // }

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const response = await fetch("/api/variant")
        const data = await response.json()
        setVariant(data)
      } catch (error) {
        console.error("Failed to fetch categories", error)
      }
    }

    fetchVariants()
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0]
      setFormValues((prevValues) => ({
        ...prevValues,
        ImagePath: imageFile,
      }))
      console.log(formValues)
    }
  }

  return (
    <div className="w-auto flex justify-center">
      <form
        method="POST"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Form fields */}
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="IdVariant"
          >
            Variant
          </label>
          <Dropdown<tblvariant>
            data={variant}
            handleSelect={handleSelectCategory}
            selectedValue={selectedVariant}
            displayProperty="Id"
            valueProperty="NameVariant"
          />
        </div> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="NameProduct"
          >
            Name Variant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NameProduct"
            name="NameProduct"
            type="text"
            value={formValues.NameProduct ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Price"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Price"
            type="number"
            name="Price"
            placeholder=""
            value={formValues.Price ?? 0}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ImagePath"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ImagePath"
            type="file"
            name="ImagePath"
            accept="image/*"
            placeholder=""
            onChange={handleImageChange}
          />
          {formValues.ImagePath && <span>{formValues.ImagePath.name}</span>}
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
