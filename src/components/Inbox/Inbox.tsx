import React from 'react';
import Task from '../Task/Task';
import TasksSection from '../TasksSection/TasksSection';
import './Inbox.scss'

const Inbox = (): JSX.Element => {
    const tasksMock: { id: number, title: string, done: boolean }[] = [
        { id: 1, title: 'Hello', done: false },
        { id: 2, title: 'World', done: false },
        { id: 3, title: 'Test', done: true },
        { id: 4, title: 'Task', done: true },
        { id: 5, title: 'Really long name of task really long name of task really long name of task really long name of task really long name of task', done: false }
    ];

    const tasks = tasksMock.map(t => <Task key={t.id} task={t} />);

    return (
        <section className='inbox-section'>
            <TasksSection title='Inbox'>
                {tasks}
            </TasksSection>
        </section>
    );
}

export default Inbox;