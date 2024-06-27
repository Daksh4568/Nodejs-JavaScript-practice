
 var c = 300
 let a = 300

  if(true){
    let a = 10
    const b = 20
    console.log("INNER : " , a)
  }
  // Now if we console log than we are not get the output for a and b 
  // beause a and b are only for the scope if 
  // The code we are writing in the if is a local scope and the code we are writing outside is global scope 

 console.log(a)
//  console.log(b)
 console.log(c)
 
// we dont use var in most of the cases as it creates problem
// the value we are writing inside the scope should not get outside 

// we are gonna learn about the nested scope 
// The data which is in global scope can be accessed by local scope but we cant access local scope data outside of the scope
