

/* let x = 6;
let y = "6";
console.log (x===y);


let p = myFunction(4, 3);
document.getElementById("demo").innerHTML = p;

function myFunction(a, b) {
  return a * b;
}

//map syntax
let new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[ thisArg])

// map example:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//filter syntax :
var new_array1 = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])

//filter example :
const num = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4] */

const students = [
    { name: 'aditya', grade: 96 },
    { name: 'ankita', grade: 84 },
    { name: 'rahul', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  const studentGrades = students.filter(student => student.grade >= 90);
  return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]
  
  
  


