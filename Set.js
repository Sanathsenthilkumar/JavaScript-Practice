//Set

const set1 = new Set(["Apple", "Banana", "Orange"]);
console.log(set1);
console.log(typeof set1);

const set2 = new Set();
set2.add(1);
set2.add(2);
console.log(set2)
set2.add(2);//duplicates dont get added.
console.log(set2);
set2.add('2');
console.log(set2);

let text = ""
for(const x of set1){
    text += x +" ";
}
console.log(text);

const set3 = new Set(["Nissan", "Toyota", "Honda", "BMW", "Porsche"]);
const check = set3.has("Toyota");
console.log(check);

const data = set3.values();
let text1 = "";
for (const x of data) {
    text1 += x + " "; 
}
console.log(text1);

//The Set.entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object
const data2 = set1.entries();
let text2 = "";
for(const x of data2) {
    text2 += x + " ";
}
console.log(text2);