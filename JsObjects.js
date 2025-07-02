//JS Objects

//various ways of creating objects
const person = {
    fname: 'john',
    lname: 'doe'
}
console.log(person);

const person1 = {};
person1.fname = 'jane';
person1.lname = 'doe';
person1.age = 23;

console.log(person1);

const person3 = new Object()
person3.fname = 'Naruto';
person3.lname = 'Uzumaki';
console.log(person3)

//object constructor and prototype

function person4(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.designation = "IT Emoloyee"
}
person4.prototype.name = function() {
    return this.fname + " " + this.lname
}
person4.prototype.nationality = "Indian";
const f1 = new person4("Roronoa", "Zoro");
const f2 = new person4('Uchiha', 'Sasuke');
const f3 = new person4('Spongebob', 'Squarepants');
console.log(f1, f1.nationality, f2, f3);

//Iterating on an Object
const cars = {
    WagonR : '6Lakhs',
    Swift: '7Lakhs',
    Alto: '5Lakhs'
}
let text = ""
for(let [car, value] of Object.entries(cars)) {
    text += car + " -> " + value + "<br/>"
}
// document.getElementById('Object').innerHTML = text;

//get and set
const p = {
    fname: 'Virat',
    lname: 'Kohli',
    get fullName() {
        return this.fname +" "+ this.lname;
    },
    set team(team) {
        this.playerteam = team;
    }
}
p.team = "RCB"
console.log(p.fullName);
console.log(p.playerteam);

//prevent from adding extra properties to an object.

const person5 = {
    fname: 'Christiano',
    lname: 'Ronaldo'
}
// Object.preventExtensions(person5);
Object.seal(person5); //preferred way
person5.age = 40; 
console.log(person5);
console.log(Object.isSealed(person5));




//--->

const person1 = {
        firstName: "Shubham",
        lastName: "Kumar",
        fullName: function() {
            return this.firstName + " " + this.lastName
            }
}
 
const data = {
    firstName: "Avinash",
    lastName: "Kumar",
}
 
let fullName = person1.fullName.bind(data)
console.log(fullName())

const person2 = {
    fullName: function(city) {
        return this.fname + " " + this.lname + " " + city
    }
}
 
const p1 = {
    fname: "Reshab",
    lname: "kumar"
}
 
const p2 = {
    fname: "Ravi",
    lname: "kumar"
}
console.log(person2.fullName.call(p1, "Chandigarh"))
console.log(person2.fullName.apply(p1, ["Chandigarh"]))