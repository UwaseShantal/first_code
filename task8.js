// Global variable representing a national statistic in Uganda
let ugandaPopulation = 45741000; 

// Function to demonstrate local and global variables
function displayStatistics() {
    // Local variable
    let localStatistic = "This is a local statistic.";

    console.log("Global variable (Uganda Population): " + ugandaPopulation);
    console.log("Local variable: " + localStatistic);
}

// Calling the function to display statistics
displayStatistics();

// Trying to access the local variable outside the function (will cause an error)
console.log(localStatistic);