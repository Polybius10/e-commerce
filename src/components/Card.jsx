import React from 'react';

export default function Card ({title="title", image="https://i.imgur.com/QkIa5tT.jpeg", price="199%", category="category"}) {
  return (
    <div className='bg-pink-300'>
      <h3>{title}</h3>
      <img src={image}/>
      <p>{price}</p>
      <span>{category}</span>
      <button>Add to Cart</button>
      
    </div>
  )
}

























// import {  useState } from 'react';
// // import { Link, useParams } from 'react-router-dom';
// import { useFetch } from '../helpers/UseFetch';
// import Product from './Product';

// export default function Card({title="default title", image="https://i.imgur.com/QkIa5tT.jpeg", price="200", category="cetegory"}) {
// const [product, setProduct] = useState(null)
// const [data, loading, error] = useFetch(`https://fakestoreapi.com/products/`)
// console.log({data})
// // // const {id} = useParams();

//   return (
//       <div className='flex flex-col min-w-fit max-w-10 h-fit text-clip py-2 my-4 mx-auto px-9 rounded-md bg-gray-200 shadow-md p-4'>
//           {/* <p className='flex justify-end mt-1 text-green-600'>Available</p> */}
//             <img
//               className='max-w-56 max-h-48 mb-6 mx-auto shadow-md rounded-xl' src={image} alt="imagen desde la API"> 
//             </img>
//             <h5 className='flex mb-2 font-bold text-start overflow-hidden'>{title}</h5>
//             <div className='flex w-full mt-7 mb-3 justify-between'>
//               <Link to={`/product/${product.id}`}>             
//                <button className="flex w-fit h-fit px-5
//                 py-1  bg-green-400 text-white rounded-lg hover:bg-green-600">View Product</button>
//               </Link>

//                 <div className='flex mt-1 hover:font-bold'>
//                   <span className="hover:w-9 hover:h-7"><img className='flex w-8 h-6 cursor-pointer ' src="https://www.svgrepo.com/show/419225/ecommerce-price-shop.svg"/></span>
//                   <h6 
//                   className='flex font-lg cursor-pointer'>${price}</h6>
//                   {/* <Link to={`/item/${product.id}`}>Ver Mas</Link> */}
//                 </div>
//             </div>
//       </div>
//   )
// }

