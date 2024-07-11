// These are basically ho we are gonna managae the array 

const coding = ["JS" , "Ruby" , "Java" , "Python" , "CPP" ]


// for each value does not return any value 
const values = coding.forEach( (item) => {
    
   console.log(item);
//    return item
})

console.log(values)



const myNums = [ 1 , 2 , 4 , 5 , 6, 7,8 ]
// filter creates a new array with only the elements that satisfy a specified condition.
// whenever we use filter function we will get a callback function where every element will be accessed 
// and then we will provide a condition 

const mynewNums = myNums.filter( (num) => num > 4 )
// if we are using a filter function and have used a curly bracket than we have to use return 
// otherwise we will get an empty array
console.log(mynewNums)

const myNewNum2 = myNums.filter( (num) => {
    return num > 3
} )
// if we are using a scope than we have to use return
// if we are not using a scope {} than there is no need to write return 
// discussed in arrow code 
// console.log(mynewNums)
console.log(myNewNum2)

//  same thing with for each , but we can see that using filter is comparable easy

const newNums2 = []
myNums.forEach((num) => {
    if(num>0){
     newNums2.push(num)
    }
})
console.log(newNums2)

// suppose if we want to filter a book with a genre 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// this is how we can filter out the data from the given dataset 
let userBooks = books.filter( (bk) => bk.genre === 'History')
// we have to return as we are using a scope 
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
}) 

console.log(userBooks)