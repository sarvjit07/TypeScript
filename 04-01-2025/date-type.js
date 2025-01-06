// Create a new Date instance
var currentDate = new Date();
// Display the current date and time
console.log("Current Date and Time:", currentDate);
// Create a specific date
var specificDate = new Date(2025, 0, 4); // Year: 2025, Month: 0 (January), Day: 4
console.log("Specific Date:", specificDate);
// Parse a date string
var parsedDate = new Date("2025-01-04T10:00:00Z"); // ISO 8601 format
console.log("Parsed Date:", parsedDate);
// Get individual components of a date
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // Months are 0-indexed
console.log("Day:", currentDate.getDate());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
// Modify a date
specificDate.setFullYear(2030);
console.log("Modified Specific Date:", specificDate);
