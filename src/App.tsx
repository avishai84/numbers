import React, {useState} from 'react';
import NumberModule from './components/NumbersModule';
import Footer from './components/Footer';
import Lang from './components/Lang';
import './App.css';
import {LangContext} from './LangContext';


function App() {
  const [locale, setLocale] = useState(null);

  return (
    <div className="App">
      <LangContext.Provider value={{locale, setLocale}}>
        <Lang />
        <NumberModule />
        <Footer />
      </LangContext.Provider> 
    </div>
  );
}

export default App;
