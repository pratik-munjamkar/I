
import './App.css';

import Contact from './components/Contact';
import Home from './components/Home';
import Navs from './components/Navs';
import {BrowserRouter, Routes, Route} from "react-router-dom"

/**
 * The main component of the application. Renders the navigation bar and routes to the appropriate
 * component based on the URL path.
 * @returns The rendered application.
 */
function App() {
  return (
    <BrowserRouter>
    <>
    <Navs />

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    </>
    </BrowserRouter>
  );
}
/**
 * A React component that renders a navigation bar.
 * @returns {JSX.Element} - A navigation bar component.
 */

export default App;
