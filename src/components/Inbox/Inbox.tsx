import React from 'react';
import IndividualProject from '../IndividualProject/IndividualProject';
import './Inbox.scss'

const Inbox = (): JSX.Element => {
    return (
        <>
            <IndividualProject name='Inbox' />
            <IndividualProject name='Test' />
        </>
    );
}

export default Inbox;