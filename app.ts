let dayNumber = 1;
let minutes = 0;
let hours = 0;
let formattedTime;

let powerMax = 105;
let powerAvailable = 0; // MW per hour
let charge = 0;
let batteryStorage = 0; // MW
let chargeRatio = 0.8 // % of available power

let diWaterAvailable = 0; // kg
const diWaterRate = 310; // kg per minute
const diPowerRate = -0.0372; // MW per hour

let hydrogenproduced = 0 // kgs
let deesidePipeInLine1 = 0; // kgs of H2
const deesidePipeInLine1Max = 50; // kgs of H2
let deesideStorage1 = 0; // kgs of H2
const deesideStorage1Max = 2000; // kgs of H2
let deesidePipeInLine2 = 0; // kgs of H2
const deesidePipeInLine2Max = 50; // kgs of H2
let deesideStorage2 = 0; // kgs of H2
const deesideStorage2Max = 2000; // kgs of H2
let deesidePipeInLine3 = 0; // kgs of H2
const deesidePipeInLine3Max = 50; // kgs of H2
let deesideStorage3 = 0; // kgs of H2
const deesideStorage3Max = 2000; // kgs of H2
let deesidePipeInLine4 = 0; // kgs of H2
const deesidePipeInLine4Max = 50; // kgs of H2
let deesideHydrogenHub = 0; // kgs of H2
let deesideHydrogenHubMax = 2000; // kgs of H2

let electroProductionMax = 31.944; // kgs per minute @ 100%
const electroPowerMax = -100; //MW per hour
const electroDIConsumption = -308.333; // kgs per min

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
                powerAvailable = powerMax;

                if (powerAvailable > 0) {
                    powerAvailable = powerAvailable + diPowerRate + electroPowerMax;
                    charge = (powerAvailable * chargeRatio) / 60;
                    batteryStorage = batteryStorage + charge;
                    powerAvailable = powerAvailable - (powerAvailable * chargeRatio);
                    diWaterAvailable = Math.round(diWaterAvailable + diWaterRate + electroDIConsumption);
                    hydrogenproduced = Math.round(hydrogenproduced + electroProductionMax);
                    
                };
            } else {
                powerAvailable = 0;
            }
            
        }
        else {
            clearInterval(this);
        }

        console.log(`Day ${dayNumber}: ${formattedTime}, Power: ${powerAvailable}/${powerMax} MW, Battery: ${batteryStorage} MW, DI Water available: ${diWaterAvailable} kg, Hydrogen Produced: ${hydrogenproduced} kg`);

    }, 250);
}



timeSimulator();