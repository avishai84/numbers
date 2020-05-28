import React, { useState, useContext } from "react";
import {LangContext} from '../LangContext';
import {langFN} from '../types/types';

const Lang:langFN = () => {
 const {locale, setLocale} = useContext(LangContext); 
 const [langHebrew, setLangHebrew] = useState(false);
 const handleClick = () => {
    setLangHebrew(!langHebrew);
    setLocale(!langHebrew);
  };
  return (
    <>
      <button onClick={handleClick} lang={langHebrew.toString()}>
        <span>{langHebrew ? "English " : "עִבְרִית‎"}</span>
      </button>
    </>
  );
};

export default Lang;
