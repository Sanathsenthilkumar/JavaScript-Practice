//boolean data type

console.log(Boolean(12<13));
let x = 0;
console.log(Boolean(x)); // 0 -> false
let x1 = -0;
console.log(Boolean(x1)); // -0 -> false
let y = 1;
console.log(Boolean(y)); // 1 -> true
let z = 5;
console.log(Boolean(z));
let z1 = -5;    
console.log(Boolean(z1));

let s = ""; 
console.log(Boolean(s)); // string is empty -> false
let s1 = "Hello";
console.log(Boolean(s1)); // string is not empty -> true

if(x == x1){
    console.log('Yes');
} else {
    console.log('No')
}

if(x === x1){
    console.log('Yes');
} else {
    console.log('No')
}   


//comparing 2 objects (same or different) always results in false
let m = new Boolean(false);
let n = new Boolean(false);

if(m == n){
    console.log('Yes');
} else {
    console.log('No')
}   