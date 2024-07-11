const userEmail = "Daksh@gmail.com"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}

// falsy values are 
// These all are falsy values 
// false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN

// And other than this all other are truthy values like 
// Array , "0" , 'False', " " space should be there between quotes , function(){} , [](empty array)

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.key(emptyObj).length === 0){
    console.log("Object is empty")
}
// these are ways through which we can detect if the array and object , function is empty or not 
 
// Nullish Coalescing Operator  (??) : null , undefined 
// Basically its to handle the fallback wehen the error cames 
// Basically when an null and undefined value came its not good and we cant understand it 
// SO in that case we use this as we can put some flag value or function so that we dont get any null or undefined value 
let val1;
val1 = 5 ?? 10

console.log(val1);
var2 = null ?? 10
var1 = undefined ?? 15 

val3 = null ?? 10 ?? 20

// Terniary operator 
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80")

