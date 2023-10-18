//Conditional Statements
// Syntax ox if statement
// if(condition)
// {  }
let x=4;
if(x>0){
    console.log("Positive number");
}
if(x<=0)
{
    console.log("Negative Number.");
}

if(1)
{
    console.log("will Run");
}
if(2-2)
{
    console.log("Not Run");
}

//If Else Statement

if(x>0){
    console.log("Positive number");
}
else
{
    console.log("Non Positive Number.");
}


//Program for Odd and even.

let num =5;
if(num%2)  // 5%2=1. hence 1 is true for if statement, if will be execute. 
    console.log("Odd");

else
    console.log("Even");

num % 2 ? console.log("Odd") : console.log("Even");

//Program to find a number is divisible by 5?

let numb = 1331;

numb % 5 ? console.log("Non Divisible by 5") : console.log("Divisible by 5");

//Program to get an last digit of a number?

let z = 12345;
z=z%10;
console.log(z);

let val=1234;
res=val/100;
console.log(res);

//program to check a number is divisible by 2 and 3.
let a1=6;
a1%2==0 && a1%3==0 ? console.log("divisible") :console.log("Non  divisible");;