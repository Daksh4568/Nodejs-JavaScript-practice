// This is how we use callback functions 
const a = [4 , 1 , 5 , 6 , 0 , -2 , -1 , 9 ]
// const firstNeg = (num) =>{
// return num < 0;
// };

// const result = a.findIndex(firstNeg);

// console.log(result);

a.forEach((num , i) =>{ 
  console.log("Array num is " , num);
})