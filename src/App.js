import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import { useState } from 'react';

function App() {

  const [dark , setDark] = useState(true)

  function toggleDarkMode(){
    setDark(prevdark => {
      return !prevdark
    })
  }

  return (
    <div className="App">
      <Navbar darkMode={dark} toggle={toggleDarkMode}/>
      <Hero darkMode={dark}/>
    </div>
  );
}

export default App;
