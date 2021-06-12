import React from 'react';
import './Sidebar.scss';

const Sidebar = (): JSX.Element => {
    return (
        <aside className='main-sidebar'>
            <div className='sidebar-content-wrapper'>
                <ul className='sibedar-content'>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <p>ICON</p>
                            <span className='sidebar-nav-entry__span'>Inbox</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <p>ICON</p>
                            <span className='sidebar-nav-entry__span'>Today</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li'>
                        <div className='sidebar-nav-entry'>
                            <p>ICON</p>
                            <span className='sidebar-nav-entry__span'>Next 7 days</span>
                        </div>
                    </li>
                    <li className='sidebar-content__li sidebar-projects-burger'>
                        <div className='sidebar-nav-entry'>
                            <p>ICON</p>
                            <span className='sidebar-nav-entry__span'>Projects</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;