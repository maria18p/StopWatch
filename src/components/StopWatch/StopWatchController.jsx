import React, { useReducer, useState } from 'react'
import { StopWatch } from './StopWatchModel';
import StopWatchView from './StopWatchView';
export default function StopwatchController() {

    const [watchRunning, setWatchRunning] = useState(false);

    const stopwatchReducer = (state, action) => {
        if (action.type === "increment") state.stopwatch.incrementTime();
        if (action.type === "decrement") state.stopwatch.decrementTime();
        if (action.type === "CLEAR") {
            state.stopwatch.clearTime();
        }
        return { stopwatch: state.stopwatch };
    }

    const [stopwatchState, dispatchStopwatch] = useReducer(stopwatchReducer, { stopwatch: new StopWatch() })

    const stopwatchThreadReaducer = (state, action) => {
        clearInterval(state.thread)
        if (action.type === "START") {
            state.thread = setInterval(() => {
                dispatchStopwatch({ type: "increment" })
            }, 1)
            setWatchRunning(true)
            return { thread: state.thread }
        }
        if (action.type === 'STOP' && watchRunning === true) {
            setWatchRunning(false)
            return { thread: null }
        }
        if (action.type === "CLEAR") {
            dispatchStopwatch({type:"CLEAR"})
            setWatchRunning(false)
            return { thread: null }
        }
        if(action.type === "REVERSE"){
            state.thread = setInterval(() => {
                dispatchStopwatch({ type: "decrement" })
            }, 1)
            setWatchRunning(true)
            return { thread: state.thread }
        }

        return {thread: state.thread}

    }
    const [stopwatchThread, dispatchStopWatchThread] = useReducer(stopwatchThreadReaducer, { thread: null })

    return (
        <>
            <StopWatchView
                timeString={stopwatchState.stopwatch.getTime()}
                startStopwatch={() => dispatchStopWatchThread({ type: "START" })}
                stopStopwatch={() => dispatchStopWatchThread({ type: "STOP" })}
                clearStopwatch={() => dispatchStopWatchThread({ type: "CLEAR" })}
                reverseStopWatch={() => dispatchStopWatchThread({ type: "REVERSE"})}
            />
        </>
    );
}

/*
    state1 <= dispatch{reducer}
    dispatch(action: {type: TYPE}) =>----- reducer(state1, action: {type: TYPE})
    reducer ->>>> returns new state = state2 
    -->>>> state1 = state2

    stopwatchThread = {
        thread: null
    }

    calling dispatch({type: START}) => reducer changes state1 ---> state1 = {thread: setInterval...}

    calling dispatch({type: STOP}) => reducer changes state1 ---> state1 = {thread: null}

*/