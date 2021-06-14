import React from 'react';
import { useReducer } from 'react';
import { TaskReducerAction, TasksReducerState, TaskType } from '../../redux/types';
import Task from '../Task/Task';
import TasksSection from '../TasksSection/TasksSection';
import './IndividualProject.scss';

interface IndividualProjectProps {
    name: string,
    tasks: TaskType[]
}

function tasksReducer(state: TasksReducerState, action: TaskReducerAction): TasksReducerState {
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

const IndividualProject = ({ name, tasks = [] }: IndividualProjectProps): JSX.Element => {
    const [tasksStore, dispatch] = useReducer(tasksReducer, { tasks });
    const tasksList = tasksStore.tasks.map(t => <Task dispatch={dispatch} key={t.id} task={t} />);

    return (
        <section className='individual-project'>
            <TasksSection title={name} dispatch={dispatch}>
                {
                    tasksList.length > 0 ? tasksList : <span>All done</span>
                }
            </TasksSection>
        </section>
    );
}

export default IndividualProject;