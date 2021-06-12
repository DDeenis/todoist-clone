import React from 'react';
import { FaInbox, FaCalendar, FaCalendarWeek, FaArrowDown } from "react-icons/fa";
import './Sidebar.scss';

const Sidebar = (): JSX.Element => {
    return (
        <aside className='main-sidebar'>
            <div className='sidebar-content-wrapper'>
                <ul className='sibedar-content'>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <FaInbox className='sidebar-nav-entry__icon' />
                            <span className='sidebar-nav-entry__span'>Inbox</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <FaCalendar className='sidebar-nav-entry__icon' />
                            <span className='sidebar-nav-entry__span'>Today</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <FaCalendarWeek className='sidebar-nav-entry__icon' />
                            <span className='sidebar-nav-entry__span'>Next 7 days</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li sidebar-projects-burger'>
                        <div className='sidebar-nav-entry'>
                            <FaArrowDown className='sidebar-nav-entry__icon' />
                            <span className='sidebar-nav-entry__span sidebar-nav-entry__span_active'>Projects</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;