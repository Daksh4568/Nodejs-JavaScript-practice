function getCheese(callback){
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("Cheese is here " , cheese)
        callback(cheese);
    } , 2000)
}

function makeDough(cheese , callback){
    setTimeout(()=>{
        const dough = cheese + '🍩'
        console.log("Here is the dough", dough)
        callback(dough);
    } , 2000)
}
function bakePizza(dough , callback){
    setTimeout(()=>{
        const pizza = dough + '🍩';
        console.log("Here is the pizza", pizza)
        callback(pizza);
    } , 2000)
}

getCheese((cheese)=>{
   makeDough(cheese,(dough)=>{
      bakePizza(dough , (pizza)=>{
        console.log('Yay! Pizza is ready', pizza);
      });
   });
});