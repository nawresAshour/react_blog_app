import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import About from './about';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import Slider from './Slider';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

     

        <div className="content"> 
          <Slider />
          <Routes>
            <Route path="/" element={<Home />} />


            <Route path="/Create" element={<Create />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/About" element={<About />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
   
        </div>    
           <Footer />
      </div>
    </Router>
  );
}


export default App;