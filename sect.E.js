// Rainfall data for the last 10 days in millimeters
const rainfallData = [400, 191, 600, 205, 30, 300, 402, 451, 50, 55];

// Using a for loop to print rainfall data
console.log("Rainfall data for the last 10 days:");
for (let i = 0; i < rainfallData.length; i++) {
  console.log("Day " + (i + 1) + ": " + rainfallData[i] + " mm");
}
