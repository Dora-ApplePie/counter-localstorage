import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk';
import {loadState, saveState} from '../utils/localstorage'

let rootReducer = combineReducers({
    counter: counterReducer
});


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
});


export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
