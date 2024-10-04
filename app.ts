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
        console.log(`Day ${dayNumber}: ${formattedTime}`);
      } else {
        clearInterval(this); // Stop the simulation after 365 days
      }
    }, 500); // Update every 60000 milliseconds (1 minute)
  }
  
  timeSimulator();