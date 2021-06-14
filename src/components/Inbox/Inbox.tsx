import React from 'react';
import { useAppSelector } from '../../redux/redux-hooks';
import Task from '../Task/Task';
import TasksSection from '../TasksSection/TasksSection';
import './Inbox.scss'

const Inbox = (): JSX.Element => {
    const tasksFromState = useAppSelector()(state => state.tasks.tasks);

    const tasks = tasksFromState.map(t => <Task key={t.id} task={t} />);

    return (
        <section className='inbox-section'>
            <TasksSection title='Inbox'>
                {tasks}
            </TasksSection>
        </section>
    );
}

export default Inbox;