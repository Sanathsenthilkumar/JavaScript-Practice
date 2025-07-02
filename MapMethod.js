//Maps in JS
const fruits = new Map([
    ["apple", 10],
    ["mango", 40],
    ["grapes", 15],
    ["guava", 22]
])
console.log(fruits);

fruits.set("papaya", 5);
console.log(fruits);
fruits.set("papaya", 15);
console.log(fruits);
// fruits.set("papaya", 5); // changes everytime when updated.
// console.log(fruits);
console.log("Mangoes: ",fruits.get("mango"))
console.log("Size of map: ",fruits.size)
fruits.delete("apple");
console.log(fruits);
fruits.clear();
console.log('Cleared the fruits map! ', fruits);

const vegetables = new Map([
    ["potato", 50],
    ["carrot", 35],
    ["beetroot", 27]
])
let text = "";
for(let x of vegetables.keys()){
    text += x + " "; 
}
console.log(text);
//for-each
vegetables.forEach((count,v) => {
    console.log(count+" -> "+v+" ");
})