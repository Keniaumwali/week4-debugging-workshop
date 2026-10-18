
const students = [
    { name: "Aline", score: 85 },
    { name: "David", score: 72 },
    { name: "Marie", score: 91 }
];

// Display students in a readable table
console.table(students);

// Count how many times the function is called
function greetStudent(name) {
    console.count("greetStudent called");
    console.log("Hello, " + name);
}

greetStudent("Aline");
greetStudent("David");
greetStudent("Marie");

// Measure how long a loop takes
console.time("One million iterations");

for (let i = 0; i < 1000000; i++) {
    // Repeat one million times
}

console.timeEnd("One million iterations");
