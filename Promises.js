//Promises

// promise -> A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

function placeOrder() {
    return new Promise(resolve => {
        console.log("user placed an order");
        setTimeout(() => resolve("Restaurant acceptes the order"), 500);
    }); 
}

function acceptOrder(msg) {
    console.log(msg);
    return new Promise(resolve => {
        setTimeout(() => resolve("Food is being prepared"), 1000);
    })
}

function prepareFood(msg) {
    console.log(msg);
    return new Promise(resolve => {
        setTimeout(() => resolve("Deliver partner is assigned"), 2000);
    })
}

function assignDeliveryPartner(msg) {
    console.log(msg);
    return new Promise(resolve => {
        setTimeout(() => resolve("Order delivered"), 500);
    })
}

//handling promises. (promises have been created now we should handle them.)
//we will use '.then -> for positive results' and '.catch -> for error results'
// ES5 (.then & .catch) && ES6 (try & catch)

placeOrder()
.then(acceptOrder)
.then(prepareFood)
.then(assignDeliveryPartner)
.then(console.log)
.catch((err) => {
    console.log("error: ", err);
})
//Promises has 2 types of states -> 2 states (resolve & reject) and 3 states(resolve, reject & pending).

//async and await are used to handle promises more clearly and easily.