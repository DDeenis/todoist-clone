import React from 'react';
import { useState } from 'react';
import { FaInbox, FaCalendar, FaCalendarWeek, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { projectNamesSelector } from '../../redux/projectsReducer';
import { useAppSelector } from '../../redux/redux-hooks';
import ProjectsList from './ProjectsList/ProjectsList';
import './Sidebar.scss';
import SidebarEntry from './SidebarEntry/SidebarEntry';

type SidebarEntries = 'inbox' | 'today' | 'week';

const Sidebar = (): JSX.Element => {
    const [isToggled, setIsToggled] = useState(false);
    const [active, setActive] = useState<SidebarEntries>('inbox');
    const projectNames = useAppSelector()(projectNamesSelector);
    const [listStyle, setListStyle] = useState<React.CSSProperties | undefined>({ height: '3.3rem' });
    
    const expand = (): void => setListStyle({ height: (3.5 * projectNames.length + 1) + 'rem' });
    const reset = (): void => setListStyle({ height: '3.3rem' });

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
                    <li className='sidebar-content__li sidebar-projects-burger' onClick={() => setIsToggled(!isToggled)} style={listStyle}>
                        <div className='sidebar-nav-entry' onClick={isToggled ? reset : expand}>
                            {
                                isToggled
                                    ? <FaChevronDown className='sidebar-nav-entry__icon' />
                                    : <FaChevronRight className='sidebar-nav-entry__icon' />
                            }
                            <span className='sidebar-nav-entry__span sidebar-nav-entry__span_active'>Projects</span>
                        </div>
                        <ProjectsList />
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;