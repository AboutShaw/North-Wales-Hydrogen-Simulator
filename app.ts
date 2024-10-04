let dayNumber = 1;
    let hours = 0;
    let minutes = 0;
    let formattedTime;
    let powerMax = 0;
    let powerAvailable = 0; // MW per hour
    let diWaterAvailable = 0; // m3
    const diWaterRate = 2; // m3 per minute
    const diPowerRate = -3; // MW per hour

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
                powerMax = 105;
                if (powerAvailable > 0) {
                    powerAvailable = powerAvailable + diPowerRate;
                    diWaterAvailable = diWaterAvailable + diWaterRate;
                }
                
            }
            
        }
        else {
            clearInterval(this);
        }

        console.log(`Day ${dayNumber}: ${formattedTime}, Power: ${powerAvailable}/${powerMax} MW, DI Water available: ${diWaterAvailable}`);

    }, 250);
}



timeSimulator();