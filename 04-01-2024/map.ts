// Create a Map with string keys and number values
let data: Map<string, number> = new Map<string, number>();

// Add entries to the Map
data.set("apple", 10);
data.set("banana", 20);
data.set("orange", 30);

// Retrieve values
console.log("Apple quantity:", data.get("apple")); // Output: Apple quantity: 10

// Check if a key exists
console.log("Has banana:", data.has("banana")); // Output: Has banana: true
console.log("Has grape:", data.has("grape"));   // Output: Has grape: false

// Iterate through the Map
console.log("All entries:");
data.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// apple: 10
// banana: 20
// orange: 30

// Get the size of the Map
console.log("Total items in the map:", data.size); // Output: Total items in the map: 3

// Delete an entry
data.delete("banana");
console.log("After deleting banana:", data.size); // Output: After deleting banana: 2

// Clear all entries in the Map
data.clear();
console.log("After clearing the map:", data.size); // Output: After clearing the map: 0
