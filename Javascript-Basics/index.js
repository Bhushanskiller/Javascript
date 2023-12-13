console.log('Hello World Via JS in Console from index.js file');
//Day 1
/*
literal:
literals are fixed values written directly into the code. 
Unlike variables or complex expressions, literals offer an explicit and concrete value, 
making coding more straightforward and manageable.
*/
//String
let firstName='Bhushan'; //string literal
console.log(firstName);
console.log(typeof firstName);

//number
let age = 30;//number literal
console.log(age);
console.log(typeof age);
age=30.2;// This will return number only
console.log(typeof age);

//boolean
let isActive = true;
console.log(age);
console.log(typeof isActive);

//Array
let cars=[{
    make:'Toyota',
    model:'Camry',
    year:2018
},{
    make:'Toyota',
    model:'Camry',
    year:2018
},{
    make:'Toyota',
    model:'Camry',
    year:2018
}];

cars[1].model='Accord';
console.log(cars);

