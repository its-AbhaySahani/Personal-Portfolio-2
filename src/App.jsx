import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/navbar'
import About from './components/about/About';
import Skill from './components/skills/Skill';
import { SwitchContext } from './contexts/SwitchContext';

const App = () => {
  const myStorage = window.localStorage;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (myStorage.getItem('darkMode') === 'true') setDarkMode(true);
  }, [myStorage, setDarkMode]);

  return (
    <SwitchContext.Provider value={{ darkMode, setDarkMode, myStorage }}>
      <div className={`main-content ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <Header />
        <Nav />
        <About />
        <Skill />
      </div>
    </SwitchContext.Provider>
  );
}

export default App;
