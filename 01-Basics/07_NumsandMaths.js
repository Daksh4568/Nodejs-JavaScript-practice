 const score = 400
 // if we want to particularly define that we are taking a number then we can use this 
 const balance =  new Number(100)
 console.log(balance) 
// to string can be used to basically convert the number to string
 console.log(balance.toString().length)

 // to fixed can be used to get the precision value in many cases 
 // there are many cases where we need the exact value of the number , points to
 // then we use to fixed
 console.log(balance.toFixed(2))

 const hundreds = 1000000
// to locale can be used to basically shwcase the hundred in a esay manner  
 console.log(hundreds.toLocaleString('en-IN'))


 //++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-4));
 //abs will give you the positive value if you will enter negative value
 console.log(Math.round(4.3));
 // round will round the value that you will enter 
 console.log(Math.ceil(4.2));// top value will be considered
 console.log(Math.floor(4.9));// Neeche wali , lowest value lega 

 console.log ( Math.max(4 , 6 , 7 , 9 ));
 console.log ( Math.min(2, 6 , 7 , 9 ));
 

 // the  value of math randon will always be between 0  and 1 

 console.log(Math.random());
 console.log((Math.random()*10) + 1);
 
 

