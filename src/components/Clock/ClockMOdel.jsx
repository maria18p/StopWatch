export class Clock {
    constructor(){
        this.time = new Date();
    }

    getTime(){
        return this.time.toLocaleTimeString();
    }

}