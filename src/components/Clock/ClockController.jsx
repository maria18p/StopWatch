import React, { useReducer, useState } from 'react'
import { Clock } from './ClockMOdel'
import ClockView from './ClockView'


export default function ClockController() {

    const [clock, setClock] = useState(new Clock())

    function clockThreadReducer(state, action){
        if(action.type === "START") {
            return {thread: setInterval(() => {
                setClock(new Clock())
            }, 1000)}
        }
        if(action.type === "STOP") {
            clearInterval(state.thread)
            return {thread: null}            
        }
        
    }

    const [clockThread, clockThreadDispatch] = useReducer(clockThreadReducer, {thread : null})


    function startClock() {
        clockThreadDispatch({type: "START"})
    }

    function stopClock() {
        clockThreadDispatch({type: "STOP"})
    }

    function toggleClock(){

    }

    return (
        <>
            <ClockView
                timeDisplay={clock.getTime()}
                startClock={startClock}
                stopClock={stopClock}
            />
        </>
    );
}

