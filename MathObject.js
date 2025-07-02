//Math object

const pi = Math.PI; //value of pi
console.log("Value of pi: ",pi);
const a = Math.E; // Euler's number
console.log("Euler's Number: ",a);
const b = Math.LOG2E; // Log base 2 of e
console.log("Log base 2 or e: ",b);
const c = Math.SQRT2; // Square root of 2
console.log("Square root of 2: ",c);
const d = Math.round(4.5); //round
console.log("Round: ",d);
const d1 = Math.round(-4.5);
console.log(d1);
const e = Math.ceil(4.5); // rounds up to the nearest integer
console.log("Ceil: ",e);
const e1 = Math.ceil(-4.5);
console.log(e1);
const f = Math.floor(4.5); // rounds down to the nearest integer
console.log("Floor: ",f);
const f1 = Math.floor(-4.5);
console.log(f1);
const g = Math.trunc(4.5); // removes the decimal values
console.log("Trunc: ",g);
const h = Math.sqrt(1225);// square root
console.log(h);
const h1 = Math.sqrt(-1225);
console.log(h1);
const i = Math.abs(-4.5); // absolute value
console.log("Absolute value: ",i);
const i1 = Math.abs(4.5);
console.log(i1);

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000)
    //one random number is generated and multiplied with 900000 and then it is adds to the random number.
    console.log("Random otp: ",otp);
    document.getElementById('random-otp').innerHTML = otp;
}

