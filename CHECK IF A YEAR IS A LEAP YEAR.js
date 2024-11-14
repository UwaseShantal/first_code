function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false
