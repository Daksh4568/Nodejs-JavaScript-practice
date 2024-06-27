// There are many cases in which global scope can create pollution 
// So to tackle that problem we use IIFE

// This is how we perform IIFE
(function chai(){
    // Its a named IIFE
    console.log(`Database Connected`)
})();
// In cases where IIFE dont know where to end , So in that case we have to write the semicolon , otherwise it will show error

// Its like a normal function , we can pass name and all that 

( (name) => {
    // Its  a simple IIFE
    console.log(`Database Connected Two ${name}`)
} )("Daksh")
// We have also passed the parameter in this function 
// And when we are usijg two IIFE then in that case we have to use ; after one function 


 

  