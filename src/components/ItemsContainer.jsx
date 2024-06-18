import React from 'react';
// import { useEffect, useState } from 'react';
import {useFetch} from './UseFetch.jsx'
import Card from './Card.jsx';

function ItemsContainer() {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
    console.log({data})
  return (
    <div>
    <article className='flex flex-col py-4 mx-8  gap-4 
    md:grid md:grid-cols-2 md:gap-2 
    lg:grid lg:grid-cols-3 lg:gap-3'>
      {data?.map(index =>  
      <Card key={index.id} 
      title={JSON.stringify(index.title)} 
      image={index.image} 
      price={JSON.stringify(index.price)}
      category={JSON.stringify(index.category)}/>)}
    </article>
    </div>
  )
}

export {ItemsContainer}