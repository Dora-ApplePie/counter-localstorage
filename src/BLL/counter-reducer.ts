const initialState = {
    value: 666
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, value: state.value + 1
            }
        }
        case "SET-VALUE-FROM-LOCAL-STORAGE": {
            return {
                ...state, value: action.value
            }
        }
        default:
            return state
    }
    return state
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const);
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const);

export type IncValueType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorage = ReturnType<typeof setValueFromLocalStorageAC>

export type ActionType = IncValueType | SetValueFromLocalStorage