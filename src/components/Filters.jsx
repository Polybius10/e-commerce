import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Filters() {

    const [data, setData] = useState(null)
    useEffect (() => {
      axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setData(response.data);
        console.log({data});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },[]);

  if (!data) {
    return <div className='text-4xl bg-black text-white'>Loading...</div>
  }
  
  return (
    <nav className='flex w-[100%] h-fit bg-green-400 px-4 overflow-y-hidden justify-between text-center shadow-xl'>
                 <ul className='flex w-screen justify-around h-fit  gap-3 text-1xl font-bold my-5 text-white'>   
                  <li><Link to="/" className='py-3 px-5 rounded-md bg-pink-500 hover:text-green-400'>{data.category}</Link></li>
                  <li><a href='#' className='py-3 px-5 rounded-md bg-blue-400 hover:text-green-400'>{JSON.stringify(data[1].category)}</a></li>
                  <li><a href='#' className='py-3 px-5 rounded-md bg-red-500 hover:text-red-400 truncate'>{JSON.stringify(data[2].category)}</a></li>
                  <li><a href='#' className='py-3 px-5 rounded-md bg-yellow-500 hover:text-red-400'>{JSON.stringify(data[3].category)}</a></li>
                  {/* <li><a href='#' className='py-3 px-5 rounded-md bg-orange-700 hover:text-red-400'>{JSON.stringify(data[4].name)}</a></li> */}
              </ul>
           
    </nav>
  )
}
