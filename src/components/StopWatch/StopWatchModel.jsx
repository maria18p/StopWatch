export class StopWatch {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.interval = null;
    }

    incrementTime() {
        this.seconds++;
        if(this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if(this.minutes === 60) {
            this.hours++;
            this.minutes = 0;
        }
    }

    decrementTime() {
        if(this.seconds === 0 && this.minutes === 0 && this.hours === 0) return

        if(this.seconds >= 0) this.seconds--;
        
        if(this.seconds < 0 && this.minutes >= 0) {
            this.seconds = 59;
            this.minutes--;
        }
        if(this.minutes < 0 && this.hours > 0){
            this.minutes = 59;
            this.hours--;
        }
    }
        

    getTime() {
        return `${this.padZero(this.hours)}:${this.padZero(this.minutes)}:${this.padZero(this.seconds)}`
    }

    padZero(number) {
        if(number > 9) return number.toString();
        return `0` + number.toString();
    }

    clearTime() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
}