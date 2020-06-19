import React, {useContext} from "react";
import {langFN} from '../types/types';
import {LangContext} from '../LangContext';

const Footer:langFN = () => {
  const {locale} = useContext(LangContext); 
  const dateYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
  {locale ? 'האתר נוצר בעזרת איסבל, סיאנה ואבישי' : 'Created By Avishai, Isabel & Sienna 2020'} {dateYear <= 2020 ? '' : ' - ' + dateYear}
      <small><a href="https://github.com/avishai84/numbers" target="_blank">Made with React - Repo</a></small>
      </footer>
    </>
  );
};

export default Footer;
