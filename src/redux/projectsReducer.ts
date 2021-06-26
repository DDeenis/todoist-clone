import { ReduxStateUtils } from "../utils/reduxUtils";
import { RootState } from "./store";
import { ProjectsReducerAction, ProjectsReducerState, ProjectType } from "./types";

const initialState: ProjectsReducerState = {
    projects: [
        { id: '1', name: 'Test1', tasks: [{ id: '1', title: 'Task example', done: false }] }
    ]
};

const projectsUtils = new ReduxStateUtils<ProjectsReducerState, ProjectType>('projects');

export default function projectsReducer(state = initialState, action: ProjectsReducerAction): ProjectsReducerState {
    switch (action.type) {
        case 'ADD_PROJECT':
            return projectsUtils.add(state, action.payload.value);
        
        case 'UPDATE_PROJECT':
            return projectsUtils.update(state, action.payload.value);
        
        case 'REMOVE_PROJECT':
            return projectsUtils.remove(state, action.payload.value);

        default:
            return state;
    }
}

export const addProjectAC = (value: ProjectType): ProjectsReducerAction => ({ type: 'ADD_PROJECT', payload: { value } });
export const updateProjectAC = (value: ProjectType): ProjectsReducerAction => ({ type: 'UPDATE_PROJECT', payload: { value } });
export const removeProjectAC = (value: ProjectType): ProjectsReducerAction => ({ type: 'REMOVE_PROJECT', payload: { value } });

export const projectsSelector = (state: RootState): ProjectType[] => state.projects.projects;
export const projectNamesSelector = (state: RootState): string[] => projectsSelector(state).map(p => p.name);
