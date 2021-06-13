import React from 'react';
import { useState } from 'react';
import { TaskReducerAction, TaskType } from '../../../redux/types';
import TaskCheckbox from '../../TaskCheckbox/TaskCheckbox';
import { v4 as uuid } from 'uuid';
import './AddTask.scss';

interface AddTaskProps {
    addTask: (task: TaskType) => TaskReducerAction
}

const AddTask = ({ addTask }: AddTaskProps): JSX.Element => {
    const [title, setTitle] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='add-task-wrapper'>
            <div className='add-task-input-wrapper'>
                <label htmlFor='add-task'>Task title</label>
                <input id='add-task' autoFocus={true} type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='add-task-checkbox-wrapper'>
                <label htmlFor='task-done'>Done</label>
                <TaskCheckbox id='task-done' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </div>
            <button className='add-task__button' onClick={() => addTask({ id: uuid(), title, done: isChecked })}>Create</button>
        </div>
    );
}

export default AddTask;