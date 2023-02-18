let item = prompt("Enter the name of the item:");
console.log(item);
let itemPrice = Number(prompt("What is the base price of the item?"));
console.log(itemPrice);
let BFPrice = prompt("Is today 'Black Friday'? Answer yes or no.");
console.log(BFPrice);
let itemBasePrice = itemPrice;
let message = "";
// let itemPrice2;
if (BFPrice === "yes") {
    itemBasePrice = itemBasePrice * 0.75;
    message +=  "Since it's Black Friday, we will reduce the price by 25%. "
} else {
    message += "It's not Black Friday, so the price didn't change for that. " ;
}
let SEPrice = prompt("Did the purchaser find the product through a search engine? Answer yes or no.");
console.log(SEPrice);
let itemPrice3;
if (SEPrice === "yes") {
    message += "We will increase the price by 1% to pay the search engine. ";
    itemBasePrice = itemBasePrice * 1.01;
} else {
    message += "The customer didn't use a search engine, so the price didn't change for that. ";
}
let CSPrice = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.");
console.log(CSPrice);

if (CSPrice === "yes") {
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%.";
    itemBasePrice = itemBasePrice * 0.9;
} else {
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that.";
}

console.log(itemBasePrice);


alert(`The base price for the ${item} is ${itemPrice}. ${message} The final price is ${itemBasePrice}`);
