import React from "react";
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { i18n } = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
      }

    return (
        <nav>
            <div className='options'>
                <a href="/home" className='hover-underline-animation'> Home </a>
                <a className='hover-underline-animation' onClick={() => changeLanguage("en")}> English </a>
                <a className='hover-underline-animation' onClick={() => changeLanguage("es")}> Spanish </a>
            </div>
        </nav>
    );

};

export default Nav;