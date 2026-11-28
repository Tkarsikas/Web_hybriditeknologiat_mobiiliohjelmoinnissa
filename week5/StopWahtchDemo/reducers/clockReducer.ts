export interface ClockState {
    isRunning: boolean
    time: number
}

export type ClockAction = 
    | {type: 'start'}
    | {type: 'stop'}
    | {type: 'reset'}
    | {type: 'tick'}

export const initialState: ClockState = {
    isRunning: false,
    time: 0
}

export function clockReducer (state: ClockState, action: ClockAction): ClockState {
    switch (action.type) {
        case "start":
            return {...state, isRunning: true}
        case "stop":
            return {...state, isRunning: false}
        case "reset":
            return initialState
        case "tick":
            return state.isRunning ? {...state, time: state.time + 1} : state
    }
}