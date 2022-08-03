import React from 'react'
import ClockController from '../../components/Clock/ClockController';
import StopWatchController from '../../components/StopWatch/StopWatchController';

import { MainContainer } from './HomePage.style';
export default function HomePage () {
    return ( 
        <MainContainer>
            <ClockController/> 
            <StopWatchController/>
        </MainContainer>
     );
}

