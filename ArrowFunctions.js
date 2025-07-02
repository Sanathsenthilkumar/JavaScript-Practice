//Arrow Functions
// => - fat arrow, so we also call it as fat arrow function
const add = (a,b) => {
    const z = a + b;
    console.log("Addition: ",z);
}
add(5,2);

const subtract = (a = 5, b = 3) => {
    const z = a - b;
    console.log("Subtraction: ",z);
}
subtract();

//we write a function with const keyword because the value will not be overwritten.
