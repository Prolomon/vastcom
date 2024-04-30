// import React from 'react'
import { useId } from "react"

const Input = ({ UniqueId, Label, Type, Placeholder, change, value, name}) => {

    const id = useId()

    return (
        <div className="w-full mb-2">
            <label htmlFor={`${id}${UniqueId}`} className="block text-md font-medium mb-2 capitalize dark:text-gray-400">{Label}</label>
            <input type={Type} id={`${id}${UniqueId}`} className="py-3 px-4 block w-full bg-transparent border-gray-400 rounded-lg dark:text-gray-300 text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none" required placeholder={Placeholder} name={name} onChange={change} value={value} />
        </div>
    )
}

export default Input
