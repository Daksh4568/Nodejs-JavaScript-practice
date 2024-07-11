const myNums = [1 , 3 , 4]

const myTotal = myNums.reduce( function (acc , currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc + currval;
} , 0  )
// accumulator , current value , initial value
const myToal2 = myNums.reduce (  (acc , curr) => acc + curr , 0 )

console.log(myTotal)

const shoppingCart = [

    {
         itemName : "Js Course",
         price : 200
    } , 
    {
        itemName : "Python Course",
        price : 500
   } , 
   {
    itemName : "Dsa Course",
    price : 400
    },   
    {
        itemName : "Data Course",
        price : 500
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)
console.log(priceToPay)