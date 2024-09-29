import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroContent from './components/HeroContent/HeroContent';
import ProductList from './components/ProductList/ProductList';
import { BookProvider } from './context/BookContext';
import FaqComponent from './components/FaqComponent/FaqComponent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BookProvider>
         <div className="audible-container">
            <Navbar />
            <Hero />
            <HeroContent />
            <ProductList />
            <FaqComponent />
            <Footer />
          </div>
       
    </BookProvider>
    
  );
}

export default App;
