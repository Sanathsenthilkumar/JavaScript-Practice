//arrays

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits)
console.log(fruits[0]);

const fruits1 = {1: 'apple', 2: 'banana', 3: 'cherry'};
console.log(fruits1)
console.log(typeof fruits1)

const fruits2 = new Array('watermelon', 'grapes', 'mango');
console.log(fruits2)
console.log(fruits2[0]);
console.log(typeof fruits2);
fruits2[1] = 'plums';
console.log(fruits2)
fruits2[3] = 'kiwi';//adds new element
console.log(fruits2);
console.log(fruits2.toString());
console.log(fruits2.length);
console.log(fruits2[fruits2.length - 1]); //last element

console.log("looping through fruits2 array:");
for(let i=0; i< fruits2.length; i++) {
    console.log(fruits2[i]);
}

const f = {1: 'apple', 2: 'banana', 3: 'cherry'};
const data = f[1];
console.log(data); 

const arr1 = new Array();
const arr2 = [];
console.log(arr1, arr2);
if(arr1 == arr2){
    console.log("both are arrays");
} else {
    console.log("both are not arrays");
}
if(arr1 === arr2){
    console.log("both are same arrays");
} else {
    console.log("both are not same arrays");
}
let res = Array.isArray(arr1);
console.log(res);
let res1 = Array.isArray(arr2);
console.log(res1);
console.log(typeof arr1);
console.log(typeof arr2);

const data1 = [1, 2, 3, 4, 5];
const res2 = data instanceof Array;
console.log(res2);
let myNum = data1.at(2);
console.log(myNum);
console.log(data1.at(-1)); //last element
console.log(data[-1]);//undefined, negative index not supported in arrays

//adding and removing elements to end of array
const animals = ['dog', 'cat', 'rabbit', 'horse'];
console.log(animals);
animals.push('elephant'); //'push' -> adds element at the end
console.log(animals);
animals.pop();
console.log(animals); //'pop' -> removes last element
console.log(animals);

//adding and removing elements to beginning of array
const food = ['idly', 'dosa', 'sambar', 'vada'];
console.log(food);
food.shift();//'shift' -> removes first element
console.log(food);
food.unshift('poori');
console.log(food); //'unshift' -> adds element at the beginning

const vegetables = ['carrot', 'broccoli', 'spinach'];
const moreVeggies = ['cabbage', 'cauliflower'];
const allVeggies1 = vegetables.concat(moreVeggies);
console.log(allVeggies1); //concatenates two arrays
const allVeggies2 = moreVeggies.concat(vegetables);
console.log(allVeggies2); //concatenates two arrays

const cars = ['Toyota', 'Honda', 'Ford'];
console.log(cars);
cars.splice(2, 0, 'Chevrolet', 'Nissan'); //adds elements at index 2
console.log(cars)
cars.splice(1,1);
console.log(cars); //removes element at index 1
cars.splice(2, 1); //removes element at index 2
console.log(cars); //removes element at index 2
cars.splice(1, 2); //removes 2 elements from index 1
console.log(cars);
cars.splice(1, 0, 'BMW', 'Mercedes', 'Audi');
console.log(cars);
console.log(cars.slice(1,2));

//Array searching
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numbers);
let num = numbers.find(myFunc);
function myFunc(value) {
    return value > 50; //finds first element greater than 50
}
console.log(num);

//reversing and sorting arrays
const mixedNums = [1, 3, 5, 4, 2, 9, 8, 6, 7];
mixedNums.sort();
console.log(mixedNums); //sorts the array in ascending order
console.log(mixedNums.reverse()); //reverses the array
mixedNums.reverse();

//min and max values in an array
console.log("max value: "+ mixedNums[mixedNums.length - 1]); //max value
console.log("min value: "+ mixedNums[0]); //min value
console.log("max value: "+ Math.max.apply(null, mixedNums)); //using math.max
console.log("min value: "+ Math.min.apply(null, mixedNums));//using math.min

//array iteration methods
//for, forEach, map, filter, reduce
const nums = [1, 2, 3, 4, 5];
function myFunc1(value, index, array) {
    return value * 5;
}

const number1 = nums.map(myFunc1);
console.log(number1); //multiplies each element by 5

const number2 = nums.map((value) => value + 2);
console.log(number2); //adds 2 to each element

const number3 = nums.filter((value) => value < 4); //arithmetic operation cannot be performed on filter
console.log(number3);

const number4 = nums.reduce((total, value) => total + value);
console.log(number4); //sums all elements in the array

const number5 = nums.keys();
console.log(number5); //returns an iterator of keys
