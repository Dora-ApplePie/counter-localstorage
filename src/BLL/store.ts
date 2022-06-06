import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    counter: counterReducer
});

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString);
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()));
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value));
});


export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
