import React from 'react';

import { ClockContainer, TimeDisplay } from './ClockStyle.style';
export default function ClockView(props) {
    
    const handleStart = () => {
        props.startClock();
    }

    const handleStop = () => {
        props.stopClock();
    }

    return (
        <ClockContainer>
            <TimeDisplay>
                <h1>{props.timeDisplay}</h1>
                <button onClick={() => {handleStart()}}>START</button>
                <button onClick={() => {handleStop()}}>STOP</button>
            </TimeDisplay>
        </ClockContainer>
    );
}

