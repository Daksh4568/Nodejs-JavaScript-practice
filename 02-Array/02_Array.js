const marvelHeroes = ["Thor" , "IronMan" , "Spiderman"]

const DcHeroes = ["Batman"  , "Superman" , "Joker"]

// marvelHeroes.push(DcHeroes)

// console.log(marvelHeroes)
// console.log(marvelHeroes[3][2])
// now in this case we have basically add an array into an array
// so if we want to access joker then we have to access like this [3][2]

// const allHeroes = marvelHeroes.concat(DcHeroes)
// console.log(allHeroes)
// now in case of concat it creates an entire new array while in case of push the operation was conducted in the new array

 // we also have a way through which we can add multiple arrays together 
 // spread method

 const all_Newheroes = [...marvelHeroes , ...DcHeroes]
 console.log(all_Newheroes)
 // it also provides the output in tha same manner as concat 
 // but we prefer mostly to use spread 

 const anotherArray = [1 , 2 , 3 , [4 , 5 , 6] , [7 , 8] , 9 , [10]]

 // as we can see there are many subarray in the existing anter array 
 // so to make all the subarray elements concatenated into a new array 
 // it returns a new array 

 const real_AnotheraArray = anotherArray.flat(Infinity)

 console.log(real_AnotheraArray)

 

 // there are many cases in which we got a string but we want a array
 // so to convert string and get an array we use 

 console.log(Array.isArray("Hitesh")) // it will tell if its is array or not 

 console.log(Array.from("Hitesh")) // it creates an array from an iterable object 

 console.log(Array.from({name : "Hitesh"})) // the answer will be empty 

 let score1 = 100
 let score2 = 200
 let score3 = 300 

 console.log(Array.of(score1 , score2 , score3))
 // it will basically combines all the variable into an array 
 // it basically return a new array from the set of the elements




