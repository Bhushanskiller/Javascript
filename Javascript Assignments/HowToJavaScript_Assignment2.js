//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive,negative or zero
function checkNumber(prompt)
{
    if(prompt<0)
    {
        console.log("Negative Number");
    }
    else if(prompt>0)
    {
        console.log("Positive Number");
    }
    else if(prompt==0)
    {
        console.log("zero");
    }
}
checkNumber(1);

/*
//2.Write a JavaScript function that takes a positive integer as a parameter 
and calculates its factorial using a for loop. 
The factorial of a number N is the product of all positive integers less than or equal to N.

factorial, in mathematics, the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
*/

function checkFactorial(prompt)
{
    console.log("Check Factorial");
    if(prompt<0)
    {
        return console.log("Negative Number Found!!");
    }
    else if(prompt==0)
    {
        return console.log("Factorial of 0 is 1");
    }
    else
    {
        let fact =1;
        for(let i=1;i<=prompt;i++)
        {
            console.log("fact->"+fact);
            fact *=i;
        }
        console.log("Factorial of "+prompt+" is "+fact);

    }

}
checkFactorial(4);

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function checkNumber(firstNumber,secondNumber)
{
    //Way 2
    let largestNumber = Math.max(firstNumber,secondNumber);
    console.log(largestNumber);

    //Way 1
    if(firstNumber>secondNumber)
    {
        return console.log('Larger Number is '+firstNumber);
    }
    else
    {
        return console.log('Larger Number is '+secondNumber);
    }
}

checkNumber(9,2);

/*
//Assignment 4:
//Write a JavaScript function that takes a string as a parameter 
and determines whether it's a palindrome or not.
 A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward 
 and backward (ignoring spaces, punctuation, and capitalization).
*/

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

function isPalindromemethod2(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}

function isPalindromemethod3(str) {
    let rev = str.split("").reverse().join("");
 
    if (rev == str) {
        return true
    }
    return false
 
}
 
isPalindrome('KAYAK');

/*
Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter 
and prints all the prime numbers less than or equal to that integer. 
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
*/


function isPrime(n) 
{ 
	// Corner case 
	if(n<=1) 
    {
		return false; 
    }

	// Check from 2 to n-1 
	for (let i = 2; i < n; i++) 
		if (n % i == 0) 
			return false; 

	return true; 
} 
// Function to print primes 
function printPrime(n) 
{ 
	for (let i = 2; i <= n; i++) { 
		if (isPrime(i)) 
			console.log(i +" "); 
	} 
} 
// Driver Code 
	let n = 2; 
	printPrime(n); 

/*
The strict equality ( === ) operator checks whether its two operands are equal, 
returning a Boolean result. 
*/

/*
Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series 
up to that number. 
The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
*/


function FibonacciSeries(number)
{
    let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

}

FibonacciSeries(5);

/*
Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and 
prints its multiplication table up to 10.

*/

function randomNumber(number)
{
    if(number<=0)
    {
        console.log("Please enter positive integer")
    }

    for(let i=1;i<=10;i++)
    {
        console.log(number +'*'+i+'='+number*i);
    }
}

randomNumber(7);

