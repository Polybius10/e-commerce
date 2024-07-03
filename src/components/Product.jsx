import { useEffect, useState } from 'react';
// import ItemId from '../helpers/UseFetch';
import { useFetch } from '../helpers/UseFetch';
import { useParams } from 'react-router-dom';

export default function Product({count}) {
  const {data, loading, error} = useFetch(`https://fakestoreapi.com/product/`);
  // const [count, setCount] = useState(0)
  const [product, setProduct] = useState(null);
  const id = useParams(data).id;


  useEffect((id) => {
    useFetch(`https://fakestoreapi.com/product/${id}`)
      .then((res) => {
        setProduct(res)
        console.log({id})
      })

  },[id])

  return (
    <div className='w-full p-5'>
      <div className='grid flex-col w-full h-fit p-4 gap-3 bg-slate-200 rounded-md shadow-md md:flex-row'>
        <div className='grid w-full flex-col md:w-[50%]'>
          <h1 className='text-center font-bold text-3xl'>{data.title}</h1>
          <img src={data.image} className='flex w-screen max-w-[400px] h-auto max-h-[500px] p-4 mx-auto bg-cover rounded-lg shadow-sm'/>
        </div>

        <div className='grid flex-row w-full md:w-[48%] md:flex-col md:order-2'>
          <h5 className='text-2xl'>{data.description}</h5>
          <div>
            <span className="hover:w-9 hover:h-7"><img className='flex w-8 h-6 cursor-pointer ' src="https://www.svgrepo.com/show/419225/ecommerce-price-shop.svg"/></span>
            <p className='flex font-lg cursor-pointer text-green-500'>{data.price + "$"}</p>
          </div>
          
          <h6>{"Category: " + data.category}</h6>
        </div>
      </div>
    </div>
  )
}
