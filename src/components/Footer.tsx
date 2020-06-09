import React from "react";
import {langFN} from '../types/types';

const Footer:langFN = () => {
  const dateYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
  Created By Avishai, Isabel & Sienna 2020 {dateYear <= 2020 ? '' : ' - ' + dateYear}
      </footer>
    </>
  );
};

export default Footer;
