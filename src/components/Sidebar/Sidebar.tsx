import React from 'react';
import { FaInbox, FaCalendar, FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import './Sidebar.scss';
import SidebarEntry from './SidebarEntry/SidebarEntry';

const Sidebar = (): JSX.Element => {
    return (
        <aside className='main-sidebar'>
            <div className='sidebar-content-wrapper'>
                <ul className='sibedar-content'>
                    <SidebarEntry title='Inbox' icon={<FaInbox className='sidebar-nav-entry__icon' />} />
                    <SidebarEntry title='Today' icon={<FaCalendar className='sidebar-nav-entry__icon' />} />
                    <SidebarEntry title='Next 7 days' icon={<FaCalendarWeek className='sidebar-nav-entry__icon' />} />
                    <li className='sidebar-content__li sidebar-projects-burger'>
                        <div className='sidebar-nav-entry'>
                            <FaChevronDown className='sidebar-nav-entry__icon' />
                            <span className='sidebar-nav-entry__span sidebar-nav-entry__span_active'>Projects</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;