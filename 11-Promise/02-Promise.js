function getCheese(){
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
        const cheese = "🧀";
        
        resolve(cheese);
    }, 2000);
  });
}
function makeDough(cheese){
    return new Promise((resolve , reject) =>{
      setTimeout(() => {
          const dough = cheese + "🧀";
 
          resolve(dough);
      }, 2000);
    });
  }
  function bakePizza(dough){
    return new Promise((resolve , reject) =>{
      setTimeout(() => {
          const pizza = dough + "🧀";
          resolve(pizza);
      }, 2000);
    });
  }
// Method 2 
// To handle error in this method we use try and catch 
// We wrap the code in the try in which we think that error can come 
// And then we can use catch 
  async function orderPizza(){
    try{
    const cheese = await getCheese()
    console.log("Got the cheese" , cheese)
    const dough = await makeDough()
    console.log("Here is the dough" , dough)
    const pizza = await bakePizza(dough);
    console.log("Pizza is ready" , pizza);
  } catch(err){
    console.log("Error occured" , err)
  }
}
  orderPizza();

// Method 1
//   getCheese()
//   .then((cheese)=>{
//     console.log("Here is the cheese " , cheese);
//     return makeDough(cheese);
//   })
//   .then((dough)=>{
//     console.log("Made the dough " , dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) =>{
//     console.log("This is your delicious Pizza ", pizza);
//   })
//   .catch((data) =>{
//     console.log("Something went wrong" , data);
//   })
//   .finally(()=>{
//     console.log("Process is ended")
//   })