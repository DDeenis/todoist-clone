import React from 'react';
import './TasksSection.scss';

interface TasksSectionProps {
    title: string,
    children: JSX.Element[] | JSX.Element
}

const TasksSection = ({ title, children }: TasksSectionProps): JSX.Element => {
    return (
        <section className='tasks-section'>
            <h2 className='tasks-section__header'>{title}</h2>
            <ul className='tasks-section-tasks'>
                {children}
            </ul>
        </section>
    );
}

export default TasksSection;