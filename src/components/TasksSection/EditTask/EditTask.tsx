import React, { RefObject } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { TaskType } from '../../../redux/types';
import { isNullOrWhiteSpace } from '../../../utils/utils';
import TaskCheckbox from '../../TaskCheckbox/TaskCheckbox';
import './EditTask.scss';

interface EditTaskProps {
    onConfirm: (task: { title: string, done: boolean }) => void,
    onCancel: () => void,
    task?: TaskType
}

const EditTask = ({ onConfirm, onCancel, task }: EditTaskProps): JSX.Element => {
    const [title, setTitle] = useState(task?.title ?? '');    
    const [isChecked, setIsChecked] = useState(task?.done ?? false);
    const titleRef = useRef() as RefObject<HTMLTextAreaElement>;

    const confirm = (): void => {
        if (!isNullOrWhiteSpace(title)) {
            onConfirm({ title: title.trim(), done: isChecked });
            setTitle('');
        }
        titleRef.current?.focus();
    };

    return (
        <div className='add-task-area-wrapper'>
            <div className='add-task-input-wrapper'>
                <label className='add-task__label' htmlFor='add-task__label'>Task title</label>
                <textarea className='add-task__input' id='add-task' ref={titleRef} autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='add-task-checkbox-wrapper'>
                <label className='add-task__label' htmlFor='task-done'>Done</label>
                <TaskCheckbox id='task-done' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </div>
            <div className='add-task-buttons'>
                <button className='add-task__button' onClick={() => confirm()}>Confirm</button>
                <button className='add-task__button add-task__outlined' onClick={() => onCancel()}>Cancel</button>
            </div>
        </div>
    );
}

export default EditTask;