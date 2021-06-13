import React from 'react';
import { useState } from 'react';
import { FaPlus, FaPlusCircle, FaEllipsisH } from "react-icons/fa";
import './TasksSection.scss';

interface TasksSectionProps {
    title: string,
    children: JSX.Element[] | JSX.Element
}

const TasksSection = ({ title, children }: TasksSectionProps): JSX.Element => {
    const [isHover, setIsHover] = useState(false);

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
            <div className='add-task-wrapper' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
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