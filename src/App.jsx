import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='app'>
        <Header />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/urunler' element={<Products />} />
            <Route path='/urunler/:id' element={<ProductDetail />} />
            <Route path='/hakkimizda' element={<About />} />
            <Route path='/iletisim' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
