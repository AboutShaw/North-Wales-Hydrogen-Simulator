function simulateTime(maxTime:number) {
    let currentTime = 0;

    setInterval(() => {
        currentTime = (currentTime + 1) % maxTime;
        console.log("Simulated Time:", currentTime, "mins");
        }, 1000
    );
    return currentTime;
}

const maxTime = 1440;
simulateTime(maxTime);