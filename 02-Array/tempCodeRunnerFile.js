 const Myarray = [ 1 , 2 , 4 , true , "A"]
 console.log(Myarray)
 console.log(Myarray[4])

 const MyHeroes = ["IronMan" , "Thor"]

 const Myarray2 = new Array( 1 , "IronMan" , 3 , 4)

 console.log(Myarray2[1])


 // Array Methods 

Myarray.push(7)
Myarray2.push(5)
MyHeroes.push("Hulk")

console.log(Myarray)
console.log(Myarray2)
console.log(MyHeroes)

Myarray.pop() // it will bassically remove the last element from the array 

// Myarray.unshift(8)
// unshift will basically add the element in the starting of the array


Myarray.shift()
console.log(Myarray)

// shift can be used to basically reomve the element from the starting of the array
console.log(Myarray.includes(9)) 
// by using include we can check that if our array consist this data or not and it will answer in boolean datatype 
 console.log(Myarray.indexOf(4))
 // indexof will tell the index of the element at which it is present 

 const newArr = Myarray.join()
 // join will basically add all the elements of the array into the string 
 console.log(Myarray)
 console.log(newArr) 

 // slice , spilce

 console.log("A" , Myarray)

 const myn1 = Myarray.slice(1,3)
 console.log(myn1);
 console.log( "B", Myarray)

 // slice will basically print a sedction of the array , means it will print the 
 // data present at the index 1 , 2 . Not data present on 3 
// and no changes will be done to the original array
// last range or index will not be included in the slice 

const myn2 = Myarray.splice(1,3)
console.log('C',myn2 )
console.log(Myarray)

// now in case of splice it will also print a particular section 
// but it also includes the last range or index so the data present on 1 , 2 , 3 will be printed 
// the main difference is that it also does the changes in the main array 
// means the section (1 , 2, 3) from the myArray will also be removed but in case of slice it does not do any changes in the main array 