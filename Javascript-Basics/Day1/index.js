console.log('Hello World Via JS in Console from index.js file');

//Day 1 string,number,boolean,undefined,null

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

let chooseColor =null;
console.log(typeof chooseColor); // null is a primitive type this will return as object bug in js w3 school

//JS Supports Dynamic Update at runtime string value can be updated to number

let randomVariable ='Bhushan';
randomVariable=1;
console.log('Dynamic Update -> '+randomVariable);


//###########################################Arrays############################################### 
//You can add as many as you want and different type of objects can be stored in JS array
 let items =['milk','butter'];
 console.log(items); 

 console.log(items[10]); //undefined output

 //Update array value
items[0]='bread';

 //To add items in Array use push this will add value in last

 items.push(10);
 console.log(items); 

 //To remove items from array use pop this will remove last value of array

 items.pop(); //cannot pass anything or index number in pop brackets
 console.log(items); 


 //How to add value in beginning or in end of array use splice

//splice(index start to be considered,delete count if 0 is mentioned here it won't delete anyting,add value in array as many as you want)
//splice(start number,delete count,add array objects,add array objects....)
 items.splice(0,1);
 console.log(items); 

 items.splice(0,0,101,102);
 console.log(items); // [ 101, 102, 'butter' ] // added 101,102 in 0 index as mentioned in splice first start index parameter

 items.splice(1,0,103,104);
 console.log(items); // [ 101, 103, 104, 102, 'butter' ] //added 103,104 in 1 index as mentioned in splice first start index parameter
 
//###########################################Objects############################################### 
let user={
    name:"Bhushan",
    age:30
}
console.log(user);

//Modify objects
user.name='ABC';
console.log(user);

//You can add new objects as well uto user object
user.pin = 40023;
console.log(user);

//delete object value
delete user.name;
console.log(user);

//Multiple object values
let person =
[
    {
        name:"PersonA",
        age:30
    }, 
    {
        name:"PersonB",
        age:31
    },
    {
        name:"PersonAC",
        age:32
    }
]
console.log(person[0]);

//Pick random value user program youtubers to pick random person from comments tool
let randomNumber = Math.random(); //Math is function and on every refresh random changes value
console.log(randomNumber);
//output is different in all refresh
//0.17461507312250335 
//0.08710599536024954
 
//Math.floor returns the greatest integer less than or equal to its numeric argument
let newRandom =Math.floor(randomNumber);
console.log(newRandom);// this will return only 0

//toFixed() - Returns a string representing a number in fixed point notation
//Parameter includes number of digits after decimal point
let getValue = (Math.random()*10).toFixed(0);
console.log(getValue);

let getPerson = Math.floor(Math.random()*person.length);
console.log(person[getPerson].name);

 


