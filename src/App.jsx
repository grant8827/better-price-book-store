import './App.css'
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import ShopPage from './component/pages/ShopPage';
import CartPage from './component/ShoppingCart/CartPage';
import BookList from './component/pages/BookList';
import Contact from './component/pages/Contact'

function App() {
  return (
    <div>
      <Router>
      <Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/shop' element={<ShopPage/>}/>
  <Route path='/cart' element={<CartPage/>}/>
  <Route path='/bookList' element={<BookList/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer/>  
      </Router>
    </div>
  )
}

export default App
