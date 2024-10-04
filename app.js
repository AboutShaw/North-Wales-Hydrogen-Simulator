var currentTime = 0;
function simulateTime(maxTime) {
    setInterval(function () {
        currentTime = (currentTime + 1) % maxTime;
        console.log("Simulated Time:", currentTime, "mins");
    }, 1000);
    return currentTime;
}
var maxTime = 1440;
simulateTime(maxTime);
// const minPower = 0;
// const maxPower = 105;
// let power = 0;
// let powerSchedule = [1, 2, 3, 4, 5];
// function availablePower(params:type) {
//     if () {
//     }
// }
