   //JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. Multiple callback functions would create callback hell that leads to unmanageable code. 
  //  Promises are used to handle asynchronous operations in JavaScript.
   
   
   const promise = new Promise(function(resolve , reject){
    // Do an async task
    // db calls , cryptogaphy , network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    } , 1000)
   })
 // resolve ka connection hai then k saath 

 //.Promise then() Method: It is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.
   promise.then(function(){
    console.log('Promise Consumed');
   })

   new Promise(function(resolve , reject){
    setTimeout(function(){
      console.log("Async task 2");
      resolve();
    }, 100)
   }). then(function(){
    console.log("Async2 resoulved")
   })

   const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
       resolve({username:"Chai" , email:"daksh6666singh@gmail.com"})
    } , 1000)
   })

   promise3.then(function(user){
         console.log(user);
   })

   const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
      let error = true

      if(!error){
        resolve({username:"Daksh" , password:"123"})
      } else{
        reject('Error: Something went wrong')
      }
    } , 2000)
   })

   promise4
   .then((user)=>{
       console.log(user);
       return user.username
   })
   .then((username)=>{
       console.log(username);
   }) 

   //. Promise catch() Method: It is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error
    .catch(function(error){
    console.log(error);
   }) 
   .finally(()=>{
    console.log("The promise is either resolved or rejected")
   })

   const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
      let error = false

      if(!error){
        resolve({username:"javascript" , password:"123"})
      } else{
        reject('JS went wrong')
      }
    } , 2000)
   });
   
   async function consumePromise5(){
    try{
    const response = await promise5
    console.log(response);
   } catch(error){
    console.log(error);
   }
  }
   consumePromise5()



   // Method 1
//    async function getAllSUers()
//    {
//         try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         } catch (error) {
//           console.log("E: ", error);
//         }
//     }

// getAllSUers()
 


// Method 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
      return data.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))