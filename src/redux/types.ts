export interface BaseReduxType {
    id: string
}

export interface TaskType extends BaseReduxType {
    title: string,
    done: boolean
}

export interface ProjectType extends BaseReduxType {
    name: string;
    tasks: TaskType[];
}

export type TaskTypes = 'ADD_TASK' | 'REMOVE_TASK' | 'UPDATE_TASK';
export type ProjectTypes = 'ADD_PROJECT' | 'REMOVE_PROJECT' | 'UPDATE_PROJECT';

export interface BaseReducerState<TValue> {
    [values: string]: TValue[]
}

export interface TasksReducerState extends BaseReducerState<TaskType> {
    tasks: TaskType[];
}

export interface ProjectsReducerState extends BaseReducerState<ProjectType> {
    projects: ProjectType[];
}

interface BaseReducerAction<TType, TValue> {
    type: TType,
    payload: {
        value: TValue
    }
}

export type ProjectsReducerAction = BaseReducerAction<ProjectTypes, ProjectType>;
export type TaskReducerAction = BaseReducerAction<TaskTypes, TaskType>;
