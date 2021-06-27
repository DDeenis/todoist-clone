import React, { useState } from 'react';
import { FaPlus, FaSun, FaMoon } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { addProjectAC } from '../../redux/projectsReducer';
import { useAppDispatch } from '../../redux/redux-hooks';
import { v4 as uuid } from "uuid";
import './Header.scss';

const toggleTheme = (): void => { document.querySelector('body')?.classList.toggle('dark') };

const Header = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dispatch = useAppDispatch();

    const addProject = () => dispatch(addProjectAC({ id: uuid(), name: 'New project', tasks: [] }))
    const changeTheme = (): void => {
        toggleTheme();
        setIsDarkMode(!isDarkMode)
    }

    return (
        <header className='header'>
            <div className='header-content-wrapper'>
                <div className='logo'>
                    <img src={logo} className='logo__img' alt='Todoist logo' />
                </div>
                <nav className='header-nav'>
                    <ul className='header-nav__ul'>
                        <li className='header-nav__li'>
                            <button className='header-nav__button' onClick={() => addProject()}>
                                <FaPlus className='header-nav__icon' />
                            </button>
                        </li>
                        <li className='header-nav__li'>
                            <button className='header-nav__button' onClick={() => changeTheme()}>
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