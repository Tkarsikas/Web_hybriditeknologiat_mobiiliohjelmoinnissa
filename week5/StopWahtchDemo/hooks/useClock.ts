import { useEffect, useReducer } from "react";
import { ClockState } from "../reducers/clockReducer";
import { clockReducer, initialState } from '../reducers/clockReducer';

export type UseClockResult = ClockState & {
    start: () => void
    stop: () => void
    reset: () => void
}

export function useClock(): UseClockResult {
    const [clockState, changeClockState] = useReducer(clockReducer, initialState)

    useEffect(() => {
        if (!clockState.isRunning) return
        const timerId = setInterval(() => changeClockState({ type: 'tick' }), 1000)
        console.log("ticking...")
        return () => {
            console.log("Return")
            clearInterval(timerId)
        }

    }, [clockState.isRunning])

    return {
        time: clockState.time,
        isRunning: clockState.isRunning,
        start: () => changeClockState({type: 'start'}),
        stop: () => changeClockState({type: 'stop'}),
        reset: () => changeClockState({type: 'reset'})
    }
}