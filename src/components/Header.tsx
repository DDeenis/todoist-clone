import React, { useState } from 'react';
import { FaPlus, FaSun, FaMoon } from "react-icons/fa";

const Header = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <header className='header'>
            <div className='logo'>
                <img className='logo___img' alt='Todoist logo' />
            </div>
            <div className='header-nav'>
                <ul className='header-nav__ul'>
                    <li className='header-nav__li'>
                        <button className='header-nav__button'>
                            <FaPlus />
                        </button>
                    </li>
                    <li className='header-nav__li'>
                        <button className='header-nav__button' onClick={() => setIsDarkMode(!isDarkMode)}>
                            {
                                isDarkMode
                                    ? <FaSun />
                                    : <FaMoon />
                            }
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;