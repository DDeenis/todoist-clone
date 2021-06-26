import React from "react";
import { useState } from "react";
import { FaBullhorn, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { removeProjectAC, updateProjectAC } from "../../../redux/projectsReducer";
import { useAppDispatch } from "../../../redux/redux-hooks";
import { ProjectType } from "../../../redux/types";
import { isNullOrWhiteSpace } from "../../../utils/utils";
import './ProjectEntry.scss'

interface ProjectEntryProps {
    project: ProjectType,
    link?: string,
    isEdit?: boolean,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const ProjectEntry = ({ project, link, isEdit, active = false, onClick = (e) => e.stopPropagation() }: ProjectEntryProps): JSX.Element => {
    const [projectTitle, setProjectTitle] = useState(project.name);
    const [isEditing, setIsEditing] = useState(isEdit || false);
    const dispatch = useAppDispatch();

    const saveProjectTitle = (): void => {
        if (!isNullOrWhiteSpace(projectTitle)) {
            dispatch(updateProjectAC({ ...project, name: projectTitle }));
            setIsEditing(false);
        }
    }

    const deleteProject = (): void => {
        dispatch(removeProjectAC(project));
    }

    return (
        <li className='sidebar-content__li' onClick={onClick}>
            <div className='sidebar-nav-entry edit-project'>
                <div className='sidebar-nav-entry__wrapper'>
                    <FaBullhorn className='sidebar-nav-entry__icon' />
                    <div>
                        {
                            isEditing
                                ? <input
                                    className='edit-project__input'
                                    type='text'
                                    inputMode='text'
                                    autoFocus value={projectTitle}
                                    onChange={(e) => setProjectTitle(e.target.value)}
                                    onBlur={() => saveProjectTitle()}
                                />
                                : <Link to={link || project.id}>
                                    <span className={
                                        active
                                            ? 'sidebar-nav-entry__span sidebar-nav-entry__span_active'
                                            : 'sidebar-nav-entry__span'
                                    }>{projectTitle}</span>
                                </Link>
                        }
                    </div>
                </div>
                <span className='project-icons-wrapper'>
                    <span onClick={() => setIsEditing(true)}>
                        <FaPencilAlt />
                    </span>
                    <span onClick={() => deleteProject()}>
                        <FaTrashAlt />
                    </span>
                </span>
            </div>
        </li>
    );
}

export default ProjectEntry;