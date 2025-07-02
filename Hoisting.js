//Hoisting

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

x = 10;
console.log(x); //10

y = 5;
console.log(y);
// let y; //error
var y; // no error

// num = 6;
// if (num == 6) {
//     num = 9;
//     var num = 10;
//     console.log(num); //10
// }
// var num = 11;


// var num = 11;
// num = 6;
// if (num == 6) {
//     num = 9;
//     var num = 10;
// }
// console.log(num); //10

// let num = 11;
// num = 6;
// if(num == 6) {
//     num = 9;
//     num = 10;
// }
// console.log(num); //10

console.log(myVar);
console.log(myFunc());

var myVar = 10;
function myFunc() {
    return "Hello world!";
}
 
function outerFunc() {
    // var outerVar = "Outer";//block scope error  
    let outerVar = "Outer";
    function innerFunc() {
        // var innerVar = "Inner";//block scope error
        let innerVar = "Inner";
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunc();
}
outerFunc();
//avoid using var keyword