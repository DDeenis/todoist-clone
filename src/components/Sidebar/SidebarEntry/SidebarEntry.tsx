import React from 'react';
import './SidebarEntry.scss';

interface SidebarEntryProps {
    title: string,
    icon: JSX.Element,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const SidebarEntry = ({ title, icon, active = false, onClick = (e) => e.stopPropagation() }: SidebarEntryProps): JSX.Element => {
    return (
        <li className='sidebar-content__li' onClick={onClick}>
            <div className='sidebar-nav-entry'>
                { icon }
                <span className={
                    active
                        ? 'sidebar-nav-entry__span sidebar-nav-entry__span_active'
                        : 'sidebar-nav-entry__span'
                }>{title}</span>
            </div>
        </li>
    );
}

export default SidebarEntry;