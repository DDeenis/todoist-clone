import { TaskReducerAction, TasksReducerState, TaskType } from "./types";

const initialState: TasksReducerState = {
    tasks: []
}

export default function tasksReducer(state: TasksReducerState = initialState, action: TaskReducerAction): TasksReducerState {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload.task] };
        
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload.task.id) };
        
        case 'UPDATE_TASK':
            return { ...state, tasks: state.tasks.map(t => t.id !== action.payload.task.id ? t : action.payload.task) };

        default:
            return state;
    }
}

export const addTaskAC = (task: TaskType): TaskReducerAction => ({ type: 'ADD_TASK', payload: { task } });
export const removeTaskAC = (task: TaskType): TaskReducerAction => ({ type: 'REMOVE_TASK', payload: { task } });
export const updateTaskAC = (task: TaskType): TaskReducerAction => ({ type: 'UPDATE_TASK', payload: { task } });
