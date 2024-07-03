import { Header } from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import Main from './components/Main.jsx';
import Product from './components/Product';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';
import { useFetch } from './helpers/UseFetch.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {ItemsContainer} from './components/ItemsContainer';

function App() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
  // console.log({data});

  return (
    <BrowserRouter className="p-0 m-0 border-box bg-gray-300 font-custom w-[100%] dark:bg-slate-800">
      <Header/>
      <Search/>
      <Filters/>
      <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/product' element={<ItemsContainer/>}></Route>
          <Route path='/product/:category' element={<ItemsContainer/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
