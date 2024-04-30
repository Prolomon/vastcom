import { useState, useEffect } from "react"
import categoryJson from "../../../public/json/category.json"

const SelectCategory = ({change, value}) => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        setCategory(categoryJson)
    },[])

    return (
        <div className="relative mb-3">
          <label htmlFor="cat" className="block dark:text-gray-400 text-md font-medium mb-2 capitalize">category</label>
          <select id="cat" className="py-3 px-4 pe-9 bg-transparent block w-full border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-300 capitalize" name="category" onChange={change} value={value} required>
            <option selected hidden> -- select a category -- </option>
            {category && category.map((cate) => {
              return(
                <option key={cate.id}>{cate.category}</option>
                    )
            })}
          </select>
        </div>
    )
}

export default SelectCategory
