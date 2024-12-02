import React from 'react'
import Card from './Card'

export default function MainProducts() {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
  return (
    <div>MainProducts</div>
  )
}
