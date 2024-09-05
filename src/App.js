import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import Singleproduct from './components/Singleproduct'
import Singleproduct1 from './components/Singleproduct1'
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';


function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/product/:id" element={ <Singleproduct/> } />  {/* path for fetching single product */}
        <Route path="/products/:id" element={ <Singleproduct1/> } />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        

    </Routes>
    
    </>
  );
}

export default App;