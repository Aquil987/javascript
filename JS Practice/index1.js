//1:WAP to print hello world?
//  console.log("Hello world!");

//2:WAP to print the  numbers from 1 to 5 to the console using loop?

// for (let index = 1; index <=5; index++) {
//     console.log(index);
    
// }
// let i=0;
// while (i<=5) {
//     console.log(i);
//     i++
// }

//3: Write a function to add two numbers and return the result?
function add(a , b){
    return a+b;
}
// console.log(add(9,3));
let sum = add(4,5);
// console.log(sum);

let result =function add(a , b){
    return a+b;
}
// console.log(result(12,2));

// 4: Create a function  to calculate the area of rectangle given its width and height?

function calculate(height,Width){
    return height* Width;
}
let area = calculate(4,5)
// console.log("Area of Reactangle:",area);

// 5:function returns the reversed version string?

 let str ="Hello Aquil";
 function resversedfunction(str)
 {
    return str.split("").reverse().join();
 }
//  console.log(resversedfunction(str));

// 6:function that checks if a number is even or odd?

let num = (a)=>{
    if (a%2==0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
    
}
// console.log(num(9));

// 7: checks if a given year is a leap year?

function checkLeapYear(year){
    if((year%4===0 && year%100!==0) || (year%400===0))
        return "Leap Year";
    else
        return "Non Leap Year";
}

console.log(checkLeapYear(2016));