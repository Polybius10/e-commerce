import Filters from './components/Filters.jsx';
import Product from './components/Product';
import Card from './components/Card.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';
import { useFetch } from './components/UseFetch';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {ItemsContainer} from './components/ItemsContainer';

function App() {
  const {data, loading, error} = useFetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=9');
  console.log({data});

  return (
    <BrowserRouter className="p-0 m-0 border-box bg-gray-300 font-custom w-[100%]">
      <div className='flex p-0 m-0 w-[100%]'>
        <header className='flex w-full h-12 px-4 justify-between'>
        <Link to='/'><img src="./assets/react.svg" alt="Logo" className='h-8 w-10 bg-cover bg-no-repeat'/></Link>
        <nav>
          <button>DarkMode</button>
          <span>Log In</span>
        </nav>
      </header>
      </div>
      <Search/>
      <Filters/>
      <Routes>
        <Route path='/' element={<ItemsContainer/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
