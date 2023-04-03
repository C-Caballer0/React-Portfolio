import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router> 
            <div className="App">
              <div className='header'>
                <Navbar/>
                </div>
                <div className="content">                  
                    <Routes>
                        <Route exact path ="/" element={<Homepage/>}></Route>
                        <Route path ="/AboutMe" element={<AboutMe/>}></Route>
                        <Route path ="/Contact" element={<Contact/>}></Route>
                        <Route path ="/Projects" element={<Projects/>}></Route>
                    </Routes>
                </div>
                <div className='footer'>
                <Footer/>
                </div>
            </div>              
    </Router>
  );
}

export default App;
