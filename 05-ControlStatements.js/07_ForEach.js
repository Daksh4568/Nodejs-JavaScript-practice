const coding = ["js" , "Ruby " , "cpp" , "java" ]

coding.forEach( function (item) {

    console.log(item);
} )

const programming = [ " Batman" , "Superman" , "IronMan"]

// wiorking with arrow function  
programming.forEach((key) => {
    console.log(key)
})


function printMe(item){
    console.log(item);
}

programming.forEach( (item , index , arr) => {
    console.log(item , index , arr);
})
// array with many objects 
const myCoding = [
    {
        languageName : "Js" ,
        filename : "JS"
    },
    {
        languageName : "C++" , 
        filename : "CPP"
    },
    {
        languageName : "C" , 
        filename : "c"
    } 
]

myCoding.forEach( (item) =>{
     console.log(item.languageName)
})