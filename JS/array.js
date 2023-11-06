// In Javascript, Array is heterogenous in nature.

let arr= [1,2,3,4,5];
console.log(arr);

let arr1= ["Aquil",1,"okhla"];
console.log(arr1);

// accessing using index.

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// push, pop shift amd unshift in array

arr1.push("Saif") //push method is used for insert at the last position.
console.log(arr1);

arr1.pop() //pop method is removes the last element.
console.log(arr1);

arr1.unshift("Delhi"); //Unshift is used for add in the beginning of array.
console.log(arr1);

arr1.shift();// shift pop out the first element of an array.
console.log(arr1);
