import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Inbox from '../Inbox/Inbox';
import './Content.scss';

const Content = (): JSX.Element => {
    return (
        <div className='main-content'>
            <Switch>
                <Route path='/inbox'>
                    <Inbox />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/inbox' />
                </Route>
            </Switch>
        </div>
    );
}

export default Content;