const arr = [ 1 , 2 , 4 , 5 , 6]

for (const num of arr) {
    console.log(num)
}


const greetings = ["Hello World"]

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
 

// Masps
// Maps is a unique datatype which only containe unique character 
// And it does not contain any duplicate value 

const map = new Map()

map.set('In' , "India")
map.set('USA' , "America")
map.set('Fr' , "France")
console.log(map)

// Now we are gonna use loop on map

for (const [key , values] of map) {
    console.log(key , ':-' , values)
}

// For in loop
const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman',
    game3 : 'Assassins Creed'
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ['JS' , 'C++' , 'py' , 'java']

for (const key in programming) {
    console.log(programming[key])
}

// for object we can use for in loops
// for array we can use for of loops 



 