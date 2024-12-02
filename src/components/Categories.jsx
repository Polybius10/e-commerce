import React from 'react'
import { useFetch } from '../helpers/UseFetch';

export default function Categories() {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products/categories');
    console.log({data})
  return (
    <div>Categories</div>
  )
}
