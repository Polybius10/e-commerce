import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card({images, title="Default title", price="50"}) {
  const [imageURL, setImageURL] = useState('')
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)

  useEffect (() => {
    axios.get('https://api.escuelajs.co/api/v1/products/')
    .then(response => {
      setData(response.data);
      console.log(response);
      setImageURL(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[]);

  if (!data) {
    return <div className='text-3xl bg-black text-white'>Loading...</div>
  }

  return (
      <div className='flex flex-col w-fit h-fit py-2 px-1 my-4 mx-auto rounded-md bg-gray-60 shadow-md p-4'>
            <div 
              className='w-48 h-48 mx-auto rounded-lg shadow-md'>{imageURL && <img src={data.images} alt="Imagen desde API" />}
            </div>

            <h5
               className='flex mx-auto my-2 font-bold text-center'>{data.title}</h5>

            <div className='flex w-full my-3 justify-evenly'>

              <button className="flex w-fit h-fit px-5
              py-1  bg-green-400 text-white rounded-lg hover:bg-green-600" onClick={() => {setCount(count + 1)} } >+</button>
              <p className='mt-1'>Available</p>
              <h6 
              className='flex font-lg mt-1 '>${data.price}</h6>
            </div>
      </div>
  )
}
