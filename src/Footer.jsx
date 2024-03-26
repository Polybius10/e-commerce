import React from 'react'

function Footer() {
  return (
    <div>
    <div className='w-[100%] h-80 bg-black shadow'>
        <button
        className='flex relative w-fit h-fit top-[-14px] left-[47vw] py-1 px-4 rounded-xl bg-orange-400 text-white font-bold'
        >More</button>

    </div>
        <ul className='text-white bg-black'>
             <li><a href=''>Linkedin</a></li>
             <li><a href=''>Github</a></li>
        </ul>
    </div>
  )
}

export default Footer