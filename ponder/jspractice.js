const PI = 3.14;
let radius = 3;
let area = PI * radius * radius;
console.log("The area of the circle is: " + area);



const one = 1;
const two = '2';

let result = one * two;


let global = "I'm global";

function exampleFunction() {
    let block = "I am block level or local";
    console.log(global); // Accessing global variable
    console.log(block); // Accessing local variable

}
console.log(block);
exampleFunction();

