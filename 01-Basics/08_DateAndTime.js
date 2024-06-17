let myDate = new Date()
// we have created a object for the date

// every method will convert the date in a diffrenet way and will represent the time in different manner 

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)
// date is a type of an object 

let myCreateDate = new Date(2023 , 0 , 23 , 5 , 3)
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleString())

let myCreateedDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(`The current timestamp ${myTimeStamp}`)


let newDate = new Date()

console.log(newDate.getMonth()+1)
// in the same way we have so many methods like getDay , getYear

newDate.toLocaleString('default' , {
    weekday: "long" , 
})