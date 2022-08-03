import React from 'react'
import { ClockContainer, TimeDisplay } from '../Clock/ClockStyle.style';


export default function StopWatchView(props) {

    const start = () => {
        props.startStopwatch();
    }
    const stop = () => {
        props.stopStopwatch();
    }

    const clear = () => {
        props.clearStopwatch();
    }

    const reverse = () => {
        props.reverseStopWatch();
    }
    return (
        <ClockContainer>
            <TimeDisplay>
                <h1>{props.timeString}</h1>
            </TimeDisplay>
            <button onClick={() => { start() }}>Start</button>
            <button onClick={() => { stop() }}>Stop</button>
            <button onClick={() => { clear()}}>Clear</button>
            <button onClick={() => { reverse()}}>Reverse</button>
        </ClockContainer>
    );
}




