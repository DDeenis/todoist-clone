import React from 'react';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { addTaskAC } from '../../redux/tasksReducer';
import { TaskType } from '../../redux/types';
import Task from '../Task/Task';
import TasksSection from '../TasksSection/TasksSection';
import './Inbox.scss'

const Inbox = (): JSX.Element => {
    const tasksFromState = useAppSelector()(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    // TODO: remove after tests
    useEffect(() => {
        const tasksMock: TaskType[] = [
            { id: v4(), title: 'Hello', done: false },
            { id: v4(), title: 'World', done: false },
            { id: v4(), title: 'Test', done: true },
            { id: v4(), title: 'Task', done: true },
            { id: v4(), title: 'Really long name of task really long name of task really long name of task really long name of task really long name of task', done: false }
        ];

        tasksMock.forEach(t => dispatch(addTaskAC(t)));
    }, []);

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