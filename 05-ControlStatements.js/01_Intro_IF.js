 //if

 const isUSerLoggedIn = true

 const temperature = 41

//  if(isUSerLoggedIn){
//    console.log(`User Logged in`)
//  }

//  if(2 == "2"){
//     console.log("Executed1")
//  }

//  if( 2 === "2"){
//     console.log("Executed2")
//  }

 if(temperature === 40){
    console.log('Temperature is low')
 } else{
    console.log(" Temperature is good")
 }

 //=== is a strict comparison
 // comparison operators
//  2<=2 
//  < , > , <= , >= , == , != , ===  , !==


const score = 200

if(score > 100){
    const power = " Iron Man"
    console.log(`User power is ${power}`)
}
// now we know that this power can not be accessed outside the scope 
// but if we use var instead of const than it will not give error but it not be a good way 
// as local scope variable should not be accessed outside the scope 
 

const balance = 1000
if(balance > 500 ) console.log("Test ");

 
if(balance < 500){
    console.log("Less than 500");
}
else if(balance < 750){
   console.log("Less than 750")
}
else if(balance < 900){
    console.log("Less than 750")
}
else{
    console.log("Less than 1200")
}


const isUSerLoggedIn1 = true 
const debitcard = true
const LoggedinFromGoogle = false
const loggedinFromEmail = true
const GuestUser = true

// These are && and or condition , 
// So in && all the conditions should be true 
// and in Or (||) only one condition should be true 
if(isUSerLoggedIn1 && debitcard && 2==2){
    console.log("You can make a purchase")
}

if(LoggedinFromGoogle || loggedinFromEmail || GuestUser ){
    console.log("User logged in")
}
