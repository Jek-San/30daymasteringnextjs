import { FC, useEffect, useState } from "react"

interface DropdownProps {
  handleSelectCategory: any
  datas: any[]
  selectedCategory: number
}

const Dropdown: FC<DropdownProps> = ({
  handleSelectCategory,
  datas,
  selectedCategory,
}) => {
  return (
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="IdCategory"
      name="IdCategory"
      value={selectedCategory}
      onChange={(e) => handleSelectCategory(Number(e.target.value))}
    >
      <option value="">Select a category</option>
      {datas.map((data) => (
        <option key={data.Id} value={data.Id}>
          {data.NameCategory}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
