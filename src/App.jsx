import Header from './Header';
import Filters from './Filters.jsx';
import Card from './Card.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';
import { useFetch } from './UseFetch';


function App() {
  const {data, loading, error} = useFetch('https://api.escuelajs.co/api/v1/products/');
  console.log({data});

  return (
    <div className="p-0 m-0 border-box bg-gray-300 font-custom w-[100%]">
      <div className='flex p-0 m-0 w-[100%]'>
        <Header/>
      </div>
      <Search/>
        <article className='flex flex-col py-4 mx-8  gap-4 
        md:grid md:grid-cols-2 md:gap-2 
        lg:grid lg:grid-cols-3 lg:gap-3'>
          {data?.map(index =>  
          <Card key={index.id} title={JSON.stringify(index.title)} image={index.images[0]} price={JSON.stringify(index.price)}/>)}
        </article>
      <Footer/>
    </div>
  )
}

export default App
