import React from 'react';
import { useAppSelector } from '../../redux/redux-hooks';
import IndividualProject from '../IndividualProject/IndividualProject';
import './Inbox.scss'

const Inbox = (): JSX.Element => {
    const projectsSource = useAppSelector()(state => state.projects.projects);
    const projects = projectsSource.map(p => <IndividualProject key={p.id} name={p.name} tasks={p.tasks} />)

    return (
        <>
            <IndividualProject name='Inbox' />
            {
                projects
            }
        </>
    );
}

export default Inbox;