//Closures, Local Variables and Global Variables

//Closure -> A closure is a function that has access to the parent scope, after the parent function has closed.

function add1() {
    let a = 4; //local variable
    return a+a;
}
// console.log(a); //error
add1();

let b = 5; //global variable
function add2() {
    return b+b;
}
console.log(b); //global variable is accessible anywhere within the file it is present in.
add2();


const c = 11;
function add3() {
    const c = 5;
    console.log(c+c);
}
add3();

function add4() {
    const d = 2;
    console.log(d+d);
}
const d = 3;
add4(); // the variable within the function will be used. Global variable will not be used.

let counter = 0;
function count() {
    counter +=1;
    console.log(counter);
}
count();

function counter1() {
    let count1 = 0;
    count1 += 1;
    console.log(count1);
}
counter1();
counter1();
counter1();

//nested functions
function counter2() {
    let count2 = 0;
    function plus() {
        count2 += 1;
    }
    plus();
    console.log(count2)
}
counter2();