//string

const str = "Hello, World!";
console.log(str.length)

const movie = "Marvel's \"Avengers\" Endgame"
console.log(movie);

const city = 'OOTY'
const city1 = new String('OOTY');
//compare string with string object using '==
if(city == city1){
    console.log("same");
} else {
    console.log("not same")
}
console.log(typeof city + " " + typeof city1);

//compare string with string object using '==='
if(city === city1){
    console.log("same");
} else {
    console.log("not same")
}
console.log(typeof city + " " + typeof city1);


//string methods
const name = "karpagam";
const char = name.charAt(2);
console.log(char);
console.log(name.charCodeAt(1)); //ASCII value of character at index 2

let fruits = "apple,banana,orange";
let vegetables = "carrot,potato,pumpkin";
let sliced = fruits.slice(0,5);
console.log(sliced); //apple
let substr = fruits.substring(6,12);
console.log(substr); //banana
const uppercase = fruits.toUpperCase();
console.log(uppercase); //APPLE,BANANA,ORANGE
const lowercase = fruits.toLowerCase(); 
console.log(lowercase); //apple,banana,orange
const concatination = fruits.concat(","+vegetables);
console.log(concatination); //apple,banana,orange carrot,potato,pumpkin 

//index and lastIndex
const data = "Hello everyone, welcome to this JavaScript tutorial. This is a great tutorial.";
const index = data.indexOf("JavaScript");   
console.log(index);
const lastIdxOf = data.lastIndexOf("this");
console.log(lastIdxOf);
const data1 = "My name is John. I'm a Developer";
const lastIndex = data1.lastIndexOf("John", 10);//searches for "John" only in the first 10 characters
console.log(lastIndex); // 11, it searches for "John" only in the first 15 characters
const data2 = "Hello, World!";
const index2 = data.search("World");
console.log(index2);
const matchingString = data.match("JavaScript");
console.log(matchingString); // ["JavaScript"]