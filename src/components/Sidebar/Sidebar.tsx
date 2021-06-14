import React from 'react';
import { useState } from 'react';
import { FaInbox, FaCalendar, FaCalendarWeek, FaChevronDown, FaChevronRight } from "react-icons/fa";
import './Sidebar.scss';
import SidebarEntry from './SidebarEntry/SidebarEntry';

type SidebarEntries = 'inbox' | 'today' | 'week';

const Sidebar = (): JSX.Element => {
    const [isToggled, setIsToggled] = useState(false);
    const [active, setActive] = useState<SidebarEntries>('inbox');

    return (
        <aside className='main-sidebar'>
            <div className='sidebar-content-wrapper'>
                <ul className='sibedar-content'>
                    <SidebarEntry
                        title='Inbox'
                        link='inbox'
                        icon={<FaInbox className='sidebar-nav-entry__icon' />}
                        active={active === 'inbox'}
                        onClick={() => setActive('inbox')}
                    />
                    <SidebarEntry
                        title='Today'
                        link='today'
                        icon={<FaCalendar className='sidebar-nav-entry__icon' />}
                        active={active === 'today'}
                        onClick={() => setActive('today')}
                    />
                    <SidebarEntry
                        title='Next 7 days'
                        link='week'
                        icon={<FaCalendarWeek className='sidebar-nav-entry__icon' />}
                        active={active === 'week'}
                        onClick={() => setActive('week')}
                    />
                    <li className='sidebar-content__li sidebar-projects-burger' onClick={() => setIsToggled(!isToggled)}>
                        <div className='sidebar-nav-entry'>
                            {
                                isToggled
                                    ? <FaChevronDown className='sidebar-nav-entry__icon' />
                                    : <FaChevronRight className='sidebar-nav-entry__icon' />
                            }
                            <span className='sidebar-nav-entry__span sidebar-nav-entry__span_active'>Projects</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;