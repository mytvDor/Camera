import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import Container from './Comps/Container';
// import CardMenu from './CardMenu';
// import EmailSignIn from './Comps/EmailSignIn';
import MHome from './Pages/MHome';
import About from './Pages/About';
import Navbar from './Comps/Navbar';
import Products from './Pages/Products';
import Events from './Pages/Events';
// import SupportPage from './Pages/SupportPage';
// import Form from './Pages/Form';
import Footer from './Comps/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <><Router>
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path="/"  element={<MHome/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/events" element={<Events/>} />
        {/* <Route path="/support" element={<SupportPage/>} /> */}
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  </Router></>
  );
}

export default App;
