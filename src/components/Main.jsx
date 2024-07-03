import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='flex w-full h-fit'>
      <article className='flex flex-col w-full h-fit gap-4'>
        <h1 className='flex text-3xl mx-auto'>Find the best Products!</h1>
        <Link to="/product">
          <button className='flex py-2 px-4 mx-auto bg-orange-400 text-white rounded-xl'>View Products</button>
        </Link>
      </article>

    </div>
  )
}
