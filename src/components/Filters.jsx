import React from 'react'
import { useState, useEffect } from 'react';
import {toCapital} from '../helpers/toCapital.mjs'
import { useFetch } from '../helpers/UseFetch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Filters() {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products/categories');
    const category = useParams().category;
    console.log({category});

  if (!data) {
    return <div className='text-4xl bg-black text-white'>Loading...</div>
  }
  
  return (
    <nav className='flex w-[100%] h-18 bg-gradient-to-r from-fuchsia-500 to-red-500 px-4 overflow-y-hidden justify-between text-center shadow-xl'>
                 <ul className='flex w-screen justify-around h-fit  gap-3 text-1xl font-bold my-5 text-white'>   
                  <li><Link to={`/products/${data[0]}`} className='py-3 px-5 rounded-md bg-pink-500 hover:text-green-400 shadow-md'>{data[0]}</Link></li>
                  <li><Link to={`/products/${data[1]}`} className='py-3 px-5 rounded-md bg-blue-400 hover:text-green-400 shadow-md'>{data[1]}</Link></li>
                  <li><Link to={`/products/${data[2]}`} className='py-3 px-5 rounded-md bg-red-500 hover:text-orange-200 truncate shadow-md'>{data[2]}</Link></li>
                  <li><Link to={`/products/${data[3]}`} className='py-3 px-5 rounded-md bg-yellow-500 hover:text-red-400 truncate shadow-md'>{data[3]}</Link></li>
                  {/* <li><a href='#' className='py-3 px-5 rounded-md bg-orange-700 hover:text-red-400'>{JSON.stringify(data[4].name)}</a></li> */}
              </ul>
           
    </nav>
  )
}
