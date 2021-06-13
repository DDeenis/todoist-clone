import React from 'react';
import { useState } from 'react';
import './Task.scss';

interface TaskProps {
    task: { id: number, title: string, done: boolean }
}

const Task = ({ task }: TaskProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(task.done);

    return (
        <li>
            <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <span>{task.title}</span>
        </li>
    );
}

export default Task;