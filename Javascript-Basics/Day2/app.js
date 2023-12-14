//Day 2 if condition, loop, function

//###############################################if####################################
if(true)
{
    console.log('A')
}else
{
    console.log('B')
}

//Truthy or Falsy concept
//In if values passed like 0,-0,"",'',undefined,null the it will return false
//In if other than above values mentioned for false are passed then if condition will return true
//if(100) this will not give compile time error

if('Bhushan')
{
    console.log('true condition')
}
else
{
    console.log('false condition')

}
//output : true condition

if('')
{
    console.log('true condition')
}
else
{
    console.log('false condition')

}
//output : false condition

//####################################Functions####################################

/*
Argument is value passed via method calling and 
function has parameters which considers argument values 
*/

//Example 1
function Grinder()
{
    console.log('grind');
}
Grinder();

//Example2
//no need to define what type of parameter function is holded JS at runtime handles it
function Grinder(param)
{
    console.log('grind');
}
Grinder(); // even if you don't pass parameter then too JS won't give any error

//Example 3
function Grinder()
{
    console.log('grind');
}
Grinder('tomatoes');//won't give error even if the argument is passed

//Arrow Functions
/*
-Arrow functions was introduced in es6 
-Arrow functions are nothing but different way of writing functions
-Its best practice to use arrow functions as you don't need to use function keyword
 and is self explainatory to developers
 -There is no difference between arrow functions and normal functions
*/

sqr = (n) => {
    return n*n
}
console.log(sqr(4));

/* sqr function name, () hold parameters,=> specifies arrow function */


//####################################Loops####################################
//Loops is nothing but just one single work repeat

for(let i=0;i<=5;i++)
{
    console.log(i);
}

//print numbers from 1 to 10
for(let i=1;i<=10;i++)
{
    console.log(i);
}

let users=['a','b','c','d'];
console.log(users.length);
for(let i=0;i<users.length;i++)
{
    console.log(i+1,users[i]);
}

let employee =[
    {
        name:"PersonA",
        salary:30000
    }, 
    {
        name:"PersonB",
        salary:50000
    },
    {
        name:"PersonAC",
        salary:60000
    }
]

function calculateTds(name,salary)
{
    let tds =0;
    if(salary>50000)
    {
         tds = salary*.2;
    }
    else
    {
         tds = salary*.1;
    }
    let inHand = salary-tds;
    console.log('Tax for '+name+' is Rs.'+inHand)
}

calculateTds('ABC',45000);
calculateTds('XYZ',55000);

for(let i=0;i<employee.length;i++)
{
    calculateTds(employee[i].name,employee[i].salary);
}






