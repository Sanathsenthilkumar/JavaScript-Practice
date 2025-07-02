//Logical Operators 
//
// if, else-if and else.
let a = 5

if(a === 5){
    console.log("equal");
} else {
    console.log("Not equal");
}

let b = '15'

if(b === 15){
    console.log("equal");
} else {
    console.log("not equal")
}

let c = new Date().getHours()
if(c < 10) {
    console.log("Yes");
} else if (c < 20) {
    console.log("Yes but more than 10");
} else {
    console.log("No");
}

const data = Math.random();
if(data < 0.5){
    console.log("Less than 0.5 -> ",data);
} else {
    console.log(data, " is greater")
}


let n1 = 5;
let n2 = 5;
if(n1 && n2){
    console.log("Both are true");   
} else {
    console.log("At least one is false");
}
n2 = '5';
if(n1 && n2){
    console.log("Both are true");   
} else {
    console.log("At least one is false");
}
console.log(typeof n1, typeof n2);

//switch statements

let day;
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;      
    case 4: 
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6: 
        day = "Saturday";
        break;
    default:
        day = "No day!"
}
console.log(day);

//JS Loops -> for, for in, for of, while, do while

const cars = ['Tata', 'Maruti', 'Hyundai', 'Toyota', 'Honda', 'Volkswagen', 'Ford'];

let carList = "";
for(let i = 0; i < cars.length; i++){
    carList += cars[i]+" ";
}
console.log(carList)

var i = 5;
for(var i=0;i<10;i++){ //redeclaration is happening
    // return i;
}
console.log(i);

let x = 5;
for(let x = 0; x < 10; x++) { 

}
console.log(x);

//For in loop
console.log("For in loop");
let carData = "";
for (const car in cars) { // car here is the key.
    carData += cars[car] +" ";
}
console.log(carData)

//For each loop

console.log("For each loop")

//forEach() method calls a function once each array elements.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value;
}

let carData1 = "";
cars.forEach((car) => {
    carData1 += car + " ";
})
console.log(carData1)

//while loop
console.log("While loop");
let text = "";
let j = 0;
while(j < 5) {
    text += j + " ";
    j++;
}
console.log(text);

//do-while loop
let t1 = "";
let k = 0;
do {
    t1 += k +" ";
    k++;
} while (k < 5);
console.log(t1)