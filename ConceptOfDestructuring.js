//Object Destructuring

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    city: 'California'
}
console.log(person)

let { firstName:f_Name, lastName:l_Name, age, city } = person; //renaming during destrucuring is done -> ( exisiting_name : new_name )
console.log(f_Name)

const bankData = {bankName: "State Bank of India", IFSC: "SBIN1212120"}
console.log(bankData);
const bankDetails = {bank_name: bankData.bankName};
console.log(bankDetails)

//array destructuring

const cities = ['delhi', 'mumbai', 'chennai', 'banglore'];
let [city1, city2, city3] = cities;
console.log(city3)

const num = [1, 2, 3, 4, 5, 6, 7];
const [a1,b1] = num;
console.log(a1,b1);
const [a, b, c, ...r] = num; //spread operator will take all the values, r -> which comes after the spread operator means remaining.
console.log(a, b, c, ...r);