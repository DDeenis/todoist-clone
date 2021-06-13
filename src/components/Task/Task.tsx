import React from 'react';
import { useState } from 'react';
import './Task.scss';

interface TaskProps {
    task: { id: number, title: string, done: boolean }
}

const Task = ({ task }: TaskProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(task.done);

    return (
        <li className='task'>
            <input className='task__checkbox' type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <div className='task-content'>
                <span className={isChecked ? 'task-content__title task-content__title_checked' : 'task-content__title' }>{task.title}</span>
            </div>
        </li>
    );
}

export default Task;