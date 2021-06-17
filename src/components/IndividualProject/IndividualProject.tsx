import React from 'react';
import { useReducer } from 'react';
import { TaskReducerAction, TasksReducerState, TaskType } from '../../redux/types';
import { ReduxStateUtils } from '../../utils/reduxUtils';
import Task from '../Task/Task';
import TasksSection from '../TasksSection/TasksSection';
import './IndividualProject.scss';

interface IndividualProjectProps {
    name: string,
    tasks?: TaskType[]
}

const tasksUtils = new ReduxStateUtils<TasksReducerState, TaskType>('tasks');

function tasksReducer(state: TasksReducerState, action: TaskReducerAction): TasksReducerState {
    switch (action.type) {
        case 'ADD_TASK':
            return tasksUtils.add(state, action.payload.value);

        case 'REMOVE_TASK':
            return tasksUtils.remove(state, action.payload.value);

        case 'UPDATE_TASK':
            return tasksUtils.update(state, action.payload.value);

        default:
            return state;
    }
}

export const addTaskAC = (value: TaskType): TaskReducerAction => ({ type: 'ADD_TASK', payload: { value } });
export const removeTaskAC = (value: TaskType): TaskReducerAction => ({ type: 'REMOVE_TASK', payload: { value } });
export const updateTaskAC = (value: TaskType): TaskReducerAction => ({ type: 'UPDATE_TASK', payload: { value } });

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