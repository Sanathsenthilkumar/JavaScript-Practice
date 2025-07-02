//datatypes

// String = "..." || '...'
// Number = 123 || 12.34
// Boolean = true || false
// Null = null 
// undefined = undefined
// BigInt = 1234567890123456789012345678901234567890n
// Symbol 
// Object

let a;
console.log("a:", a); // undefined

let b = null;
console.log("b:", b); // null

let c = {
    fname: 'sanath',
    lname: 'senthilkumar',
    age: 21,
    isStudent: true,
}
console.log("c:", c); // object
console.log("fname:", c.fname); // sanath
console.log(typeof c); // object
console.log(typeof(c)); // object (works with or without paranthesis!)

let d = ['sanath', 21, 'student', "cybersecurity"];
console.log("d:", d); // array (array is a type of object)
console.log(typeof d); // object

//dot notation -> used to access an object's key, file, folder

let myData = {}
console.log(myData)  //{}
myData.name = "sanath";
console.log(myData)  //{ name: 'sanath' }
myData.city = "Coimbatore";
myData.age = 21;
console.log(myData); //{ name: 'sanath', city: 'Coimbatore', age: 21 }


let fruits = {
    first: "apple",
    second: "banana",
    third: "orange",
    myFruits : function(){
        return this.first + ", " + this.second + ", " + this.third;
    },
    fruit : function() {
        return this.first
    }
}

console.log(fruits);
console.log(fruits.myFruits()); // apple, banana, orange
console.log(fruits.fruit()); // apple

//this keywork is used to access elements of an object within a function which is also inside an object.

//deleting
let allFruits = {
    f1: "apple",
    f2: "grapes",
    f3: "plums",
    fruits : function() {
        return this.f1 + ", " + this.f2 + ", " + this.f3;
    },  
}
console.log(allFruits.fruits()); // apple, grapes, plums
delete allFruits.f1; // delete f1 from allFruits
console.log(allFruits); // { f2: 'grapes', f3: 'plums', fruits: [Function: fruits] }


//nested objects

const details = {
    fname: "john",
    lname: "doe",
    age: 30,
    hobbies: {
        physical: "football",
        mental: "books",
        gaming: {
            first: "RDR",
            second: "GoT",
            third: "SEKIRO",
        },
        getHobbies: function() {
            return this.physical + ", " + this.mental + ", " + this.gaming;
        }
    }
}

console.log(details)
console.log(details.hobbies.gaming.first); // RDR
console.log(details.hobbies.gaming["second"]); // GoT
console.log(details.hobbies.getHobbies()); // football, books, [object Object]
console.log(details.hobbies.gaming); // { first: 'RDR', second: 'GoT', third: 'SEKIRO' }
details.hobbies.gaming["first"] = "Red Dead Redemption";
console.log(details.hobbies.gaming); // { first: 'Red Dead Redemption', second: 'GoT', third: 'SEKIRO' }

