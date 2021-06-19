import React from "react";
import { projectNamesSelector } from "../../../redux/projectsReducer";
import { useAppSelector } from "../../../redux/redux-hooks";
import ProjectEntry from "../ProjectEntry/ProjectEntry";
import './ProjectsList.scss';

const ProjectsList = (): JSX.Element => {
    const projectNames = useAppSelector()(projectNamesSelector);
    const projects = projectNames.map(n => <ProjectEntry key={n} title={n} link={n.toLowerCase()} />);

    return (
        <ul className='sibedar-content'>
            {
                projects
            }
        </ul>
    );
}

export default ProjectsList;