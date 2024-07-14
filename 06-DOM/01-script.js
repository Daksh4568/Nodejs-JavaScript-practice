// 1- Selection of an element 
// this means - Selecting of html query using js
// document means HTML
var a = document.querySelector("h1")
console.log(a)

// Changing HTML 

var b = document.querySelector("h1")
b.innerHTML = "Changed HTML"

//Changing CSS
b.style.color = "blue"
b.style.backgroundColor = "black"

// Event Listener
// this basically means adding an event on b(heading) of click type and when we click . We will get the console log which is written in function 
// b.addEventListener("click" , function(){
//     console.log("Kaise ho bhai")
// }) 

b.addEventListener("click" , function(){
    b.innerHTML = "Badal gya mein zamane ki tatrah"
    b.style.color = "blue"
    b.style.backgroundColor = "black"
})
// when we will click then the whole innerhtml text will change 
