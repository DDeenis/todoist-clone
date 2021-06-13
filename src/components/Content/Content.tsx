import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Inbox from '../Inbox/Inbox';
import './Content.scss';

const Content = (): JSX.Element => {
    return (
        <div className='main-content'>
            <Switch>
                <Route path='/inbox'>
                    <Inbox />
                </Route>
            </Switch>
        </div>
    );
}

export default Content;