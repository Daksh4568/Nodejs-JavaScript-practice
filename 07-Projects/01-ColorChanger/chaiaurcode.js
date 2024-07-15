const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
         console.log(e)
         console.log(e.target)
// e.target likhne se pta chalta hai ki ye event kha se aa rha hai , html-span-button se aa rha hai          
         if(e.target.id === 'grey'){
            // e.target.id se id aa rhi hai html se 
            body.style.backgroundColor = 'grey'
// or we can write it like this 
           // body.style.backgroundColor = e.target.id 
// because e.target.id mein bhi grey hi color hai 
         }
         if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
         if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
         }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
         }
         if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
         }
    });
});