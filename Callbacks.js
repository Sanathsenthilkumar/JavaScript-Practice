// CallBacks

// callback -> CallBack is a function passed as an argument to another function.

//callback-hell!!!
//pyramid of doom

// Order of execution - line by line;
//every function call is stored in the callstack and executed one by one.

//Synchronous Programming -> program is executed sequentially.
//Asynchronous Programming -> performing multiple tasks before waiting for one task to complete.

//Delaying function execution.
// console.log("Start");
// setTimeout(() => { 
//     console.log("Inside setTimeout");
// }, 2000)
// console.log("Middle");
// setTimeout(() => { 
//     console.log("Inside setTimeout2");
// }, 1000) //1000 ms -> 1 second
// console.log("Middle2");

// function myFunc() {
//     console.log("myFunc");
// }
// myFunc();
// console.log("end");

//nested callbackssss
// console.log("start");
// setTimeout(() => {
//     console.log("first");
//     setTimeout(() => {  //Immediate function which is inside a function is also a callback function.
//         console.log("first inside first");
//         setTimeout(() => {
//             console.log("first inside first inside first");
//             setTimeout(() => {
//                 console.log("first inside first inside first inside first");
//             }, 1000)
//         }, 1500)
//     }, 2000)
// }, 1000)
// console.log("end");

//another example
console.log("User placed an order");
setTimeout(() => {
    console.log("Restaurant accepted the order");

    setTimeout(() => {
        console.log("Food is being prepared");

        setTimeout(() => {
            console.log("Delivery partner is assigned");

            setTimeout(() => {
                console.log("Order is delivered to you");

                setTimeout(() => {
                    console.log("Feedback and ratings");
                },1000)
            }, 12000)
        }, 5000)
    }, 500)
}, 300) 
//this example is a single process and cannot be stopped in the middle. In order to handle that we use promises.