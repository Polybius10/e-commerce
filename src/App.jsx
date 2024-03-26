import Header from './Header'
import Filters from './Filters.jsx'
import Card from './Card.jsx'
import Search from './Search.jsx'
import Footer from './Footer.jsx'
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(0)
  useEffect (() => {
    axios.get('https://api.escuelajs.co/api/v1/products/')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[]);
  if (!data) {
    return <div className='text-3xl bg-black text-white'>Loading...</div>
  }

  return (
    <div className="p-0 m-0 border-box font-custom w-[100%]">
      <div className='flex p-0 m-0 w-[100%]'>
        <Header></Header>
      </div>
      <Search/>
      <Filters/>
      <div className='flex flex-col py-4 mx-auto bg-white gap-4 
        md:grid md:grid-cols-2 md:gap-2 
        lg:grid lg:grid-cols-3 lg:gap-3'
      >
  
          
          <Card 
              key={data[0].id}
              title={data[0].title}
              price={data[0].price}
              images={(data[0].images[0])}
          />
          <Card>
              title={data[0].title}
              price={data[0].price}
              images={(data[0].images[0])}
          </Card>

          <Card>
              (data: 
                key: {data[0].id},
                title: {data[0].title},
                images: {data[0].images[0]},
                price: {data[0].price},
              )
          </Card>
      </div>
      <Footer/>
    </div>
  )
}

export default App
