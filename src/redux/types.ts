export interface TaskType {
    id: string,
    title: string,
    done: boolean
}

export type TaskTypes = 'ADD_TASK' | 'REMOVE_TASK' | 'UPDATE_TASK';

export interface TasksReducerState {
    tasks: TaskType[]
}

export interface TaskReducerAction {
    type: TaskTypes,
    payload: {
        task: TaskType
    }
}
