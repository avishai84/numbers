import React from "react";
import {langFN} from '../types/types';

const Footer:langFN = () => {
  const dateYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
  Created By Avishai, Isabel & Sienna 2020 {dateYear <= 2020 ? '' : ' - ' + dateYear}
      <small><a href="https://github.com/avishai84/numbers" target="_blank">Repo</a></small>
      </footer>
    </>
  );
};

export default Footer;
