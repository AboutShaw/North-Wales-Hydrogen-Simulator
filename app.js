function simulateTime(maxTime) {
    var currentTime = 0;
    setInterval(function () {
        currentTime = (currentTime + 1) % maxTime;
        console.log("Simulated Time:", currentTime, "mins");
    }, 1000);
    return currentTime;
}
var maxTime = 1440;
simulateTime(maxTime);
