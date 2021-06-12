import React from 'react';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import './Main.scss';

const Main = (): JSX.Element => {
    return (
        <main className='main'>
            <Sidebar />
            <Content />
        </main>
    );
}

export default Main;