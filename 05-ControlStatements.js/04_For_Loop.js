 // for loop


 for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("% is the best number ")
    }
    console.log(element)
 }  

// Printed all the table 
 for (let i = 0; i <=10 ; i++) {
    console.log(`Outer loop value is ${i}`)
    for (let j = 0; j <= 10 ; j++) {
        console.log(i + '*' + j + ' = ' + i*j );
    }
 }

 let myArray = ["Flash","Superman","Batman","Ironman"]
 console.log(myArray.length);
for (let i = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


// break and continue

for (let i = 1; i <= 20 ; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break 
        continue
    }
    console.log(`Value of i is ${i}`)
    
}