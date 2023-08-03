import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products'
import Productdet from './components/Productdet'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Addproduct from './components/Addproduct';
import Footer from './components/Footer';
import Editprod from './components/Editprod';
import { useEffect, useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import './components/preloader.css'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  return (
    <div className="App">
      {loading ?
        <div className="preloader">
          <HashLoader
            color='#ed8a8a'
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div>
        : <div>
          <Router basename='/Masr.market_Management_System'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/:productId' element={<Productdet />} />
              <Route path='/edit/:producteditId' element={<Editprod />} />
              <Route path='/add_product' element={<Addproduct />} />
            </Routes>
            <div><Footer /></div>
          </Router>
        </div>

      }

    </div >
  );
}

export default App;
