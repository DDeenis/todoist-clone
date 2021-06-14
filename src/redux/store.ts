import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
    
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
