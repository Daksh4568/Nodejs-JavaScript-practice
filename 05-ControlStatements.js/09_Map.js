// The difference between map and filter method is that – ⁣ map transforms each element of an array 
// based on a transformation function and returns a new array of the same 
// length, While, filter creates a new array with only the elements that 
// satisfy a specified condition
const myNumbers = [ 1 , 2 , 3 , 4 , 6 , 7 , 8 , 9 , 10]
// const newNums = myNumbers.map( (int) => int + 10 )
// and we can use it with scope as well but then we have to also use return 
// const newNums = myNumbers.map( (int) => {return int + 10} )
const newNums = myNumbers
              .map( (int) => int * 10 )
//the value that will come to the next method will have the operations done on the value
              .map( (int) => int + 1 )
              .filter( (int) => num >= 40 )
console.log(newNums);

 // we can perform chaining which is using 2 to 3 methods together 

