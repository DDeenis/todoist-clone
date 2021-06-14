import React from 'react';
import { useState } from 'react';
import { TaskType } from '../../redux/types';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import './Task.scss';
import { useAppDispatch } from '../../redux/redux-hooks';
import { removeTaskAC, updateTaskAC } from '../../redux/tasksReducer';
import EditTask from '../TasksSection/EditTask/EditTask';

interface TaskProps {
    task: TaskType
}

interface TaskContent {
    title: string,
    done: boolean
}

const Task = ({ task }: TaskProps): JSX.Element => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useAppDispatch();

    const onCheck = (isChecked: boolean): void => {
        dispatch(updateTaskAC({ ...task, done: isChecked }))
    };
    const deleteTask = (): void => {
        dispatch(removeTaskAC(task))
    };
    const saveTask = (newTask: TaskContent): void => {
        setIsEditing(false);
        dispatch(updateTaskAC({ ...task, ...newTask }));
    };

    return (
        <li className='task-wrapper'>
            <div className='task'>
                <TaskCheckbox checked={task.done} onChange={() => onCheck(!task.done)} />
                <div className='task-content'>
                    <span className={task.done ? 'task-content__title task-content__title_checked' : 'task-content__title'}>{task.title}</span>
                </div>
                <span className='task-operation__icon edit-task' onClick={() => setIsEditing(true)}>
                    <FaPencilAlt />
                </span>
                <span className='task-operation__icon delete-task' onClick={deleteTask}>
                    <FaTrash />
                </span>
            </div>
            {
                isEditing &&
                <EditTask confirmCallback={(newTask: TaskContent) => saveTask(newTask)} cancelCallback={(): void => setIsEditing(false)} task={task} />
            }
        </li>
    );
}

export default Task;