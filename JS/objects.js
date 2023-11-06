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
console.log(obj); // accessing the whole object.

console.log(obj.age);// accessing the particular artibute of an object.

console.log(obj.fun());