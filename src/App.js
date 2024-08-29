import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import Singleproduct from './components/Singleproduct'
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/product/:id" element={ <Singleproduct/> } />
        <Route path="/cart" element={<Cart />} />

        
  
    </Routes>
    <Footer/>
    </>
  );
}

export default App;