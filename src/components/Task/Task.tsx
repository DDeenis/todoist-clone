import React from 'react';
import { useState } from 'react';
import { TaskType } from '../../redux/types';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import './Task.scss';

interface TaskProps {
    task: TaskType
}

const Task = ({ task }: TaskProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(task.done);

    return (
        <li className='task'>
            <TaskCheckbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <div className='task-content'>
                <span className={isChecked ? 'task-content__title task-content__title_checked' : 'task-content__title' }>{task.title}</span>
            </div>
        </li>
    );
}

export default Task;