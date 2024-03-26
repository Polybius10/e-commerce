import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


export default function Header() {
const [count, setCount] = useState(0)
const [isOpen, setIsOpen] = useState(false);
const [data, setData] = useState(null)
useEffect (() => {
  axios.get('https://api.escuelajs.co/api/v1/categories')
  .then(response => {
    setData(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
},[]);

if (!data) {
  return <div className='text-3xl bg-black text-white'>Loading...</div>
}

const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='flex sticky flex-row justify-around w-screen bg-gray-200 h-14 px-4 py-2 shadow-lg z-20'>
      <div className='flex w-fit h-fit'>
        <a href="#"><img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="icon" className='block w-12 h-10 '/>
        <span className='relative bottom-5 left-2 bg-green-400 h-fit w-fit px-1 rounded-full z-10'>{count}</span></a>
      </div>
      <div>
        E-Commerce
      </div>
      <div className="flex p-2 justify-end align-end text-bold text-center rounded-md bg-white z-10 md:hidden" onClick={toggle}>a</div>
      {isOpen && (
        <div className="flex absolute top-0 right-0 flex-col h-screen w-2/3 bg-gray-100 text-center shadow-xxl ">
              <ul className='flex flex-col justify-center align-center my-auto h-fit gap-2 text-1xl md:block md:flex-row'>   
                  <li><a href='#' className='bg-green-300 p-1 rounded-md m-2 hover:text-red-400'>Paymenth Method</a></li>
                  <li><a href='#'>Log In</a></li>
                  <li><a href='#'>{JSON.stringify(data[2].name)}</a></li>
                  <li><a href='#'>{JSON.stringify(data[3].name)}</a></li>
                  <li><a href='#'>{JSON.stringify(data[4].name)}</a></li>
              </ul>
          </div> 
          )}
    </header>
  )
}
