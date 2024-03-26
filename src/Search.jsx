import React from 'react'

export default function Search() {
  return (
    <div className='flex align-center justify-center py-3  bg-black'>
        <input 
        className='w-fit h-fit mr-[2px] bg-blue-200 p-1 pl-2 rounded-l-xl pl-1 opacity-70 
        hover:opacity-100 
        placeholder:text-gray-500' 
        type="search" 
        name="" 
        id="" 
        placeholder='Search...'/>

        <button 
        className='w-fit h-fit p-1 rounded-r-lg bg-orange-600' 
        type="submit">find</button>
    </div>
    )
}
