import React from "react";
import { useState } from "react";
import { FaBullhorn, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ProjectEntry.scss'

interface ProjectEntryProps {
    title: string,
    link: string,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const ProjectEntry = ({ title, link, active = false, onClick = (e) => e.stopPropagation() }: ProjectEntryProps): JSX.Element => {
    const [projectTitle, setProjectTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li className='sidebar-content__li' onClick={onClick}>
            <div className='sidebar-nav-entry edit-project'>
                <div className='sidebar-nav-entry__wrapper'>
                    <FaBullhorn className='sidebar-nav-entry__icon' />
                    {
                        isEditing 
                            ? <input
                                className='edit-project__input'
                                type='text'
                                inputMode='text'
                                autoFocus value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                                onBlur={() => setIsEditing(false)}
                            />
                            : <Link to={link}>
                                <span className={
                                    active
                                        ? 'sidebar-nav-entry__span sidebar-nav-entry__span_active'
                                        : 'sidebar-nav-entry__span'
                                }>{projectTitle}</span>
                            </Link>
                    }
                </div>
                <span className='edit-project__icon' onClick={() => setIsEditing(true)}>
                    <FaPencilAlt />
                </span>
            </div>
        </li>
    );
}

export default ProjectEntry;