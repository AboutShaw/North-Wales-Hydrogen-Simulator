let dayNumber = 1;
let hours = 0;
let minutes = 0;
let formattedTime;
let powerAvailable = 0;
let diWaterAvailable = 0;
const diWaterRate = 2;
const diPowerRate = -3;
function timeSimulator() {
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
            formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            // Calculate power output based on the hour of the day
            if (hours >= 1 && hours <= 5) {
                powerAvailable = 105;
                if (powerAvailable > 0) {
                    powerAvailable = powerAvailable + diPowerRate;
                    diWaterAvailable = diWaterAvailable + diWaterRate;
                }
            }
        }
        else {
            clearInterval(this);
        }
        console.log(`Day ${dayNumber}: ${formattedTime}, Power avialable: ${powerAvailable} MW, DI Water available: ${diWaterAvailable}`);
    }, 250);
}
timeSimulator();
