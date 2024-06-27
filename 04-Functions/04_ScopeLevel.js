function one(){
    const username = "Daksh"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
//    console.log(website)

   two()
}
one()
// we can access the username in the fucntion which is inside the function 1 , 
// but we cant access the website outside of the function 2
// basically child can access the parent fucntion variable but parent function cant access the data of child function

if(true){
    const username ="Daksh"

    if(username ==="Daksh"){
        const website = " JavaScript"
        console.log(username + website);
    }
    // console.log(website) we cant access the child variable outside the scope 
}

// console.log(username) 
// In the same way we can see that child ca access the parent variable but parent cant access the child variable outside the scope 


function addone(num){
    return num+1
}
 addone(5)


const add2 = function addTwo(num){
        return num+2
}
add2(5)
// variables are very strong in javascript as they can store anything 
// There is a concept of hoisting in javascript 
// Here we can see that if we have call the function addone before the function code then it is executing fine
// But in the case of the function which we have stored in the variable add2 , if we call the function before the function two code then it will show error
 