import React, { ChangeEvent } from 'react';
import './TaskCheckbox.scss';

interface TaskCheckboxProps {
    checked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    id?: string
}

const TaskCheckbox = ({ checked, onChange, id = '' }: TaskCheckboxProps): JSX.Element => {
    return (
        <input id={id} className='task__checkbox' type='checkbox' checked={checked} onChange={(e) => onChange(e)} />
    );
}

export default TaskCheckbox;