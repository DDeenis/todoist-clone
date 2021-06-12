import React from 'react';
import './SidebarEntry.scss';
import { Link } from 'react-router-dom';

interface SidebarEntryProps {
    title: string,
    link: string,
    icon: JSX.Element,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const SidebarEntry = ({ title, link, icon, active = false, onClick = (e) => e.stopPropagation() }: SidebarEntryProps): JSX.Element => {
    return (
        <li className='sidebar-content__li' onClick={onClick}>
            <div className='sidebar-nav-entry'>
                { icon }
                <Link to={link}>
                    <span className={
                        active
                            ? 'sidebar-nav-entry__span sidebar-nav-entry__span_active'
                            : 'sidebar-nav-entry__span'
                    }>{title}</span>
                </Link>
            </div>
        </li>
    );
}

export default SidebarEntry;