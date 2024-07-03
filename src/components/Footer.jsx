import React from 'react'

function Footer() {
  return (
    <div>
    <div className='w-full h-80 bg-black shadow'>
        {/* <button
        className='flex relative w-fit h-fit py-1 px-4 mx-auto top-[-14px] rounded-xl bg-orange-400 text-white font-bold'
        >More</button> */}

    </div>
        <ul className='text-white bg-black'>
             <li><a href='https://www.linkedin.com/in/matias-joel-moyano-837a87242/'>Linkedin</a></li>
             <li><a href='https://github.com/polybius10'>Github</a></li>
        </ul>
    </div>
  )
}

export default Footer