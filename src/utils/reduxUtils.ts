import { BaseReducerState, BaseReduxType } from "../redux/types";

export const addStateValue = <TState extends BaseReducerState<TValue>, TValue extends BaseReduxType>(state: TState, value: TValue, field: string): TState =>
    ({ ...state, [field]: [...state[field], value] });

export const removeStateValue = <TState extends BaseReducerState<TValue>, TValue extends BaseReduxType>(state: TState, value: TValue, field: string): TState =>
    ({ ...state, [field]: state[field].filter(t => t.id !== value.id) });

export const updateStateValue = <TState extends BaseReducerState<TValue>, TValue extends BaseReduxType>(state: TState, value: TValue, field: string): TState =>
    ({ ...state, [field]: state[field].map(t => t.id === value.id ? value : t) });
    
export class ReduxStateUtils<TState extends BaseReducerState<TValue>, TValue extends BaseReduxType> {
    constructor(public readonly field: string) { }
    
    add = (state: TState, value: TValue): TState => addStateValue<TState, TValue>(state, value, this.field);
    update = (state: TState, value: TValue): TState => updateStateValue<TState, TValue>(state, value, this.field);
    remove = (state: TState, value: TValue): TState => removeStateValue<TState, TValue>(state, value, this.field);
}
