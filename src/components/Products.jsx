import React from 'react';
import { useEffect, useState } from 'react';
import {useFetch} from '../helpers/UseFetch.jsx'
import { useParams } from 'react-router-dom';
import Card from './Card.jsx';

function Products() {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
    const category = useParams();
    console.log({category});

    // useEffect(() => {
    //   data()
    //     .then((res) => {
    //       if (category)
    //     })
    // },[])
  return (
    <div>
    <article className='flex flex-col py-4 mx-8  gap-4 
    md:grid md:grid-cols-2 md:gap-2 
    lg:grid lg:grid-cols-3 lg:gap-3'>
      {data?.map(index =>  
      <Card key={index.id} 
      title={index.title} 
      image={index.image} 
      price={index.price}
      category={index.category}/>)}
    </article>
    </div>
  )
}

export { Products }