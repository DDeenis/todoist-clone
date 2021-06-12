import React, { useState } from 'react';
import { FaPlus, FaSun, FaMoon } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <header className='header'>
            <div className='header-content-wrapper'>
                <div className='logo'>
                    <img src={logo} className='logo__img' alt='Todoist logo' />
                </div>
                <nav className='header-nav'>
                    <ul className='header-nav__ul'>
                        <li className='header-nav__li'>
                            <button className='header-nav__button'>
                                <FaPlus className='header-nav__icon' />
                            </button>
                        </li>
                        <li className='header-nav__li'>
                            <button className='header-nav__button' onClick={() => setIsDarkMode(!isDarkMode)}>
                                {
                                    isDarkMode
                                        ? <FaSun className='header-nav__icon' />
                                        : <FaMoon className='header-nav__icon' />
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;