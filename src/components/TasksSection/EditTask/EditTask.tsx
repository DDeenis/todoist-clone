import React from 'react';
import { useState } from 'react';
import { TaskType } from '../../../redux/types';
import TaskCheckbox from '../../TaskCheckbox/TaskCheckbox';
import './EditTask.scss';

interface EditTaskProps {
    callback: (task: { title: string, done: boolean }) => void,
    task?: TaskType
}

const EditTask = ({ callback, task }: EditTaskProps): JSX.Element => {
    const [title, setTitle] = useState(task?.title || '');
    const [isChecked, setIsChecked] = useState(task?.done || false);

    return (
        <div className='add-task-area-wrapper'>
            <div className='add-task-input-wrapper'>
                <label className='add-task__label' htmlFor='add-task__label'>Task title</label>
                <textarea className='add-task__input' id='add-task' autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='add-task-checkbox-wrapper'>
                <label className='add-task__label' htmlFor='task-done'>Done</label>
                <TaskCheckbox id='task-done' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </div>
            <button className='add-task__button' onClick={() => callback({ title: title.trim(), done: isChecked })}>Confirm</button>
        </div>
    );
}

export default EditTask;