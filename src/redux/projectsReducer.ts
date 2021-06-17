import { addStateValue } from "../utils/reduxUtils";
import { ProjectsReducerAction, ProjectsReducerState, ProjectType } from "./types";

const initialState: ProjectsReducerState = {
    projects: []
};

export default function projectsReducer(state = initialState, action: ProjectsReducerAction): ProjectsReducerState {
    switch (action.type) {
        case 'ADD_PROJECT':
            return addStateValue<ProjectsReducerState, ProjectType>(state, action.payload.value, 'projects');

        default:
            return state;
    }
}
