import React, {useState} from 'react'

export const Cart = () => {
  const [cart, setCart] = useState(false)
  const [count, setCount] = useState(0)

  const openCart = () => {
    setCart(!cart)
  }
  return (
        <button onClick={openCart} className='w-16 h-14 bg-[url("./assets/cart-icon.svg")] bg-center bg-cover'> 
          <div className='relative w-6 h-6 left-[24px] bottom-[8px] bg-green-500 text-white text-[12px] rounded-full'> {count} </div>  
        </button>

  )
}
