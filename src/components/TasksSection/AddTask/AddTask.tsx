import React from 'react';
import { useState } from 'react';
import { TaskType } from '../../../redux/types';
import TaskCheckbox from '../../TaskCheckbox/TaskCheckbox';
import { v4 as uuid } from 'uuid';
import './AddTask.scss';

interface AddTaskProps {
    addTask: (task: TaskType) => void
}

const AddTask = ({ addTask }: AddTaskProps): JSX.Element => {
    const [title, setTitle] = useState('');
    const [isChecked, setIsChecked] = useState(false);

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
            <button className='add-task__button' onClick={() => addTask({ id: uuid(), title: title.trim(), done: isChecked })}>Create</button>
        </div>
    );
}

export default AddTask;