import React, { Dispatch } from 'react';
import { useState } from 'react';
import { FaPlus, FaPlusCircle, FaEllipsisH } from "react-icons/fa";
import { v4 as uuid } from 'uuid';
import EditTask from './EditTask/EditTask';
import './TasksSection.scss';
import { TaskReducerAction } from '../../redux/types';
import { addTaskAC } from '../IndividualProject/IndividualProject';
import { isNullOrWhiteSpace } from '../../utils/utils';

interface TasksSectionProps {
    title: string,
    dispatch: Dispatch<TaskReducerAction>,
    children: JSX.Element[] | JSX.Element
}

const TasksSection = ({ title, dispatch, children }: TasksSectionProps): JSX.Element => {
    const [isHover, setIsHover] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    const addTask = (task: { title: string, done: boolean }) => {
        if (!isNullOrWhiteSpace(task.title)) {
            dispatch(addTaskAC({ id: uuid(), ...task }))
        }
    }

    const canselAddTask = (): void => setIsEditing(false);

    return (
        <section className='tasks-section'>
            <div className='task-section-header'>
                <h2 className='tasks-section-header__header'>{title}</h2>
                <span className='task-section-header__options'>
                    <FaEllipsisH />
                </span>
            </div>
            <ul className='tasks-section-tasks'>
                {children}
            </ul>
            {
                isEditing &&
                <EditTask onConfirm={addTask} onCancel={canselAddTask} />
            }
            <div className='add-task-wrapper' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => setIsEditing(true)}>
                <span className='add-task-wrapper__button'>
                    {
                        isHover
                            ? <FaPlusCircle />
                            : <FaPlus />
                    }
                </span>
                <span className='add-task-wrapper__span'>Add task</span>
            </div>
        </section>
    );
}

export default TasksSection;