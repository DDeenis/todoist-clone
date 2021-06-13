import { combineReducers, createStore } from "redux";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
    tasks: tasksReducer
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
