//Assignment 1 : Array Operations
//1. Create an empty array called fruits
let fruits=[];
console.log(fruits);

//2.Add the following fruits to the "fruits" array:"apple"
fruits.push('apple');
console.log(fruits);


//3.Remove the first fruit from the array
fruits.splice(0,1);
console.log(fruits);

//4.Add "grape" to the end of the array
fruits.push('grape');
console.log(fruits);

//5.Update the second fruit in the array to "pear"
fruits.splice(1,0,'pear');

//6.Print the final "fruits" array after performing the above operation
console.log(fruits);

//Assignment 2 : Object Operations
//1.Create an empty object called "person"
let person={}
console.log(person);

//2.Add the following properties to the "person" object
//-name:"John",age:30,city:"New York"
person ={
    name:'John',
    age:30,
    city:'New York'
}
console.log(person);

//3.Remove the "age" property from the "person" object
delete person.age;
console.log(person);

//4.Add a new property called "job" with the value "Engineer" to the "person" object
person.job='Engineer';
console.log(person);

//5.Update the "city" property of the "person" object to "San Francisco"
person.city='San Francisco';

//6.Print the final "person" object after performing the above operations
console.log(person);


//Assignment 3 : Array of Objects Operations
//1.Create an empty array called "cars"
let cars=[];
console.log(cars);

//2.Add three car objects to the "cars" array.Each car object should have following properties
// -make:"Toyota", model:"Camry", year:2018
cars = [
    {
    make:'Toyota',
    model:'Camry',
    year:2018
    },
    {
        make:'Toyota',
        model:'Camry',
        year:2018
    },
    {
        make:'Toyota',
        model:'Camry',
        year:2018
    }
];

console.log(cars);


//3.Remove the first car object form "cars" array
cars.splice(0,1); // this will splice and pop(in pop you cannot add index number) will release memory space as well
//console.log(cars[0]); //output will return car object
console.log(cars);


//delete cars[0]; //<1 empty item> output will have memory space as 1 empty item
//console.log(cars[0]); //output will be undefined


//4.Add a new car object to the "cars" array with the following properties:
// -make:"Honda", model:"Civic", year:2020
/*
cars.push(car={
    make:'Honda',
    model:'Civic',
    year:2020
})
*/

car ={ make:'Honda',model:'Civic',year:2020}
cars.splice(cars.length,0,car)
console.log(cars);

//5.Update the "model" property of the second car object in the array to "Accord"
//console.log(cars[1]);

cars[1].model='Accord';
//6.Print the final "cars" array after performing the above operations
console.log(cars);
