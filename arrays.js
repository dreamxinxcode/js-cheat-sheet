// Array constructor
let array = new Array(1, 2, 3, 4, 5);

// Array literal
let arr = [1, 2, 3, 4, 5];

// Map (creates new array)
const newArr = arr.map(x => x * 2); // [2, 4, 6, 8, 10]

// Sort
let toSort = [5, 4, 3, 2, 1];
toSort.sort(); // [1, 2, 3, 4, 5]




// Create new copy (spread operator)
let newArr = [... arr];
console.log(newArr);
