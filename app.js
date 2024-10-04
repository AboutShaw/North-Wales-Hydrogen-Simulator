function timeSimulator() {
    let dayNumber = 1;
    let hours = 0;
    let minutes = 0;
    setInterval(() => {
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        if (hours === 24) {
            hours = 0;
            dayNumber++;
        }
        if (dayNumber <= 365) {
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            // Calculate power output based on the hour of the day
            let powerAvailable = 0;
            if (hours >= 1 && hours <= 5) {
                powerAvailable = 105;
            }
            console.log(`Day ${dayNumber}: ${formattedTime}, Power avialable: ${powerAvailable} MW`);
        }
        else {
            clearInterval(this);
        }
    }, 100);
}
timeSimulator();
