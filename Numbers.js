//numbers

let num1 = 10;
let num2 = 20.12
console.log(typeof num1);
console.log(typeof num2);

let x = 123e45;
console.log(typeof x);
let y = 123e-45;
console.log(typeof y);
let n1 = 0.3 + 0.2
console.log(n1);
let n2 = (0.3 * 5 + 0.2 * 5);//1.5 + 1.0 => 2.5
console.log(n2);
let n3 = (0.3 * 5 | 0.2 * 5)/10;
console.log(n3);

let a = '10';
let b = '20';
console.log(a+b);
let c = 100 / '10';
console.log(c)
console.log(typeof c);
console.log(isNaN(c));
let d = 100 / 'john';
console.log(d);
console.log(typeof d);
console.log(isNaN(d));

let myNum = 5;
let data = "";
while(myNum != Infinity) {
    myNum = myNum * myNum;;
    data = data + myNum + "<br>";
}
console.log(data);

let myNum2 = 5;
let myNum3 = myNum2.toString();
console.log(myNum3)
console.log(typeof myNum3);
console.log(myNum2 / myNum3);

let z = 8.7675
let z1 = z.toExponential(2);
console.log(z1);
let z2 = z.toFixed(2);
let z3 = z.toFixed(1);
console.log(z2);
console.log(z3);

let age = '21';
console.log(age, typeof age);
let age1 = parseInt(age);
console.log(age1, typeof age1);
let age2 = parseFloat(age);
console.log(age2, typeof age2);
let name = "John";
console.log(parseInt(name));
console.log(parseFloat(name));
console.log(typeof parseInt(name));
console.log(typeof parseFloat(name));
let check = Number.isInteger(name);
console.log(check);
let check1 = Number.isInteger(parseInt(age));
console.log(check1)