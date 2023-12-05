//object in Js.
/*
syntax:
variable_name object_name{
    key:value
}
*/
let obj={
    name:'Aquil',
    age:23,
    fun: function(){
            return "I am function";}
}
//console.log(obj); // accessing the whole object.

//console.log(obj.age);// accessing the particular artibute of an object.

//console.log(obj.fun());

let student= {
    id:1,
    name:"sam",
    age:22,
    phone:989989898,
    address:"bncjhzxcb jzxc jh",
    // lastname:"jack",
}
// console.log(student.phone);

// console.log(student);
//let data = {name,age,phone,lastname} = student;   // obj destructring
 
// console.log(data);


// Example of concatination using template literals `` instead of +

let firstName = 'jhon';
let lastName = 'Doe';

let fullName = `${firstName} ${lastName}`
console.log(fullName);



let value = [
    {
        name: 'jhon', age: 20, marks: 60
    },
    {
        name: 'ton', age: 21, marks: 50 
    },
    {
        name: 'hon', age: 18, marks: 45
    }
]
// WAP to get an list of student have marks less than 60.

let filter = value.filter((e)=>{
    return e.marks < 60;
})

// console.log(filter);

let capital = value.map((ele)=>{
    return ele.name.toUpperCase();
})
// console.log(capital);

// Wap to find the sum of marks.
let totalMarks = value.reduce((acc,curr)=>{
    return acc + curr.marks;
},0)
console.log("Total marks is:",totalMarks);
