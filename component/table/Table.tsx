import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

interface TableColumn {
  key: string
  label: string
}
interface TableProps {
  url: string
}
const Table: React.FC<TableProps> = ({ url }) => {
  const router = useRouter()
  const [data, setData] = useState<any[]>([])
  const [columns, setColumns] = useState<TableColumn[]>([])
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error("Failed to fetch categories", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const columnKeys = Object.keys(data[0])
      const extractedColumns = columnKeys
        .filter(
          (key) =>
            key !== "IsDelete" &&
            key !== "Id" &&
            key !== "CreatedDate" &&
            key !== "CreateBy" &&
            key !== "CreatedDate" &&
            key !== "UpdateBy" &&
            key !== "UpdateDate"
        ) // Exclude specific column keys

        .map((key) => ({
          key,
          label: key.charAt(0).toUpperCase() + key.slice(1),
        }))
      setColumns(extractedColumns)
    }
  }, [data])
  const handleDelete = async (id: string) => {
    console.log("test")
    try {
      // Make API request to create a new post using the formData

      const response = await fetch(`/api${url}?id=${id}`, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        // Handle successful form submission
        setData((prevData) => prevData.filter((category) => category.Id !== id))

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
    <div className="overflow-x-auto">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item: any, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <>
                      <td
                        key={column.key}
                        className="px-6 py-4 text-sm text-light-800 whitespace-nowrap"
                      >
                        {item[column.key]}
                      </td>
                    </>
                  ))}
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <button
                      onClick={() => {
                        router.push(`${url}/${item.Id}`)
                      }}
                    >
                      <div className="btn btn-blue  text-green-500 hover:text-green-700">
                        Edit
                      </div>
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <button onClick={() => handleDelete(item.Id)}>
                      <div className="btn btn-blue  text-green-500 hover:text-green-700">
                        Delete
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
