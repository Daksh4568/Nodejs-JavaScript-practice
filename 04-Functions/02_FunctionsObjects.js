function calculatecardprice(...num1){
    return num1
}

console.log(calculatecardprice(200 , 400 , 500 , 2000))
// the output will be in array format 

const user1 = {

    username: " Daksh " , 
    price: 200
}

// this is how we can handle object and provide the output
// we have created a function that will provide the output 
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user1)
//or we can do it like this 

handleobject({
    username: " Daksh " , 
    price : 200
})

const MynewArray = [ 200 , 3000 , 400]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(MynewArray))// or we can do like this

console.log(returnSecondvalue([200 , 599 , 5000]))
