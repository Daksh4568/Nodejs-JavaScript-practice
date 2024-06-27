const user = {
    username: " Daksh ",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`)
        console.log(this)
    }

}
 
// user.welcomeMessage()
// user.username =" Daksh1"
// user.welcomeMessage()

// console.log(this)
// whenever we console log this then we will get an empty object
// and when we console.log(this) in the browser then we get a different output


// function chai(){
//     let username = "Daksh"
//     console.log(this.username);
// }
// we cant use this in fucntion , it only works in objets
// function call
// chai()

//by using arrow function we still cant use the this in function

const chai = () => {
    let username = " Daksh " 
    console.log(`${this.username} Welcome to my page`)
}
// chai()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
// Now in this case we are using the curly brackets and when we use curly brackets then we have to write the return 

console.log(addTwo(3,4)) 

// or we can write it like this 

const addthree = (num1 , num2 , num3) => (num1 + num2 + num3)

console.log(addthree(3 , 4 , 5))

// so when we are using this bracket () then we dont have to write the return

// suppose we have to return the object by using this technique

const user2 = (username1) => ({username:"Daksh"})

console.log(user2("Daksh"))


const myArray = [ 2 , 5 , 3 , 7 , 8]

myArray.forEach(() => ([2 , 3 , 5 , 6 ,7 ]))
