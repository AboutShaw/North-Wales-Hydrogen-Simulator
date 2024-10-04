let currentTime = 0;

function simulateTime(maxTime:number) {

    setInterval(() => {
        currentTime = (currentTime + 1) % maxTime;
        console.log("Simulated Time:", currentTime, "mins");
        }, 1000
    );
    return currentTime;
}

const maxTime = 1440;
simulateTime(maxTime);

const minPower = 0;
const maxPower = 105;
let power = 0;

let powerSchedule = [1, 2, 3, 4, 5];

function availablePower(params:type) {
    
}