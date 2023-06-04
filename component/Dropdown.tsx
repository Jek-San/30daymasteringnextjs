import React, { FC } from "react"

interface DropdownProps<T> {
  handleSelect: (selectedValue: T) => void
  data: T[]
  selectedValue: T | null
  displayProperty: keyof T
  valueProperty: keyof T
}

const Dropdown = <T extends object>({
  handleSelect,
  data,
  selectedValue,
  displayProperty,
  valueProperty,
}: DropdownProps<T>) => {
  return (
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={selectedValue ? String(selectedValue[valueProperty]) : ""}
      onChange={(e) => {
        const selectedItemId = e.target.value
        const selectedItem = data.find(
          (item) => String(item[valueProperty]) === selectedItemId
        )
        if (selectedItem) {
          handleSelect(selectedItem)
        }
      }}
    >
      <option value="">Select an option</option>
      {data.map((item) => (
        <option
          key={item[valueProperty] as any}
          value={item[valueProperty] as any}
        >
          {item[displayProperty]}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
