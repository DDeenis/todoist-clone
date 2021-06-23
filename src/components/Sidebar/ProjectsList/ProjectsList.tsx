import React from "react";
import { projectsSelector } from "../../../redux/projectsReducer";
import { useAppSelector } from "../../../redux/redux-hooks";
import ProjectEntry from "../ProjectEntry/ProjectEntry";
import './ProjectsList.scss';

const ProjectsList = (): JSX.Element => {
    const projectNames = useAppSelector()(projectsSelector);
    const projects = projectNames.map(p => <ProjectEntry key={p.id} project={p} />);

    return (
        <ul className='sibedar-content'>
            {
                projects
            }
        </ul>
    );
}

export default ProjectsList;