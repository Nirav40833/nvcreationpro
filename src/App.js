import {  Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Compnets/Menu';
import About from './Compnets/About';
import Courses from './Compnets/Courses';
import Blogs from './Compnets/Blogs';
import Events from './Compnets/Events';
import Contact from './Compnets/Contact';
import Home from './Compnets/Home';
import './App.css';
function App() {
  return (
    <>
    
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
