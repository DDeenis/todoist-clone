import { combineReducers, createStore } from "redux";
import projectsReducer from "./projectsReducer";

const reducers = combineReducers({
    projects: projectsReducer
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
