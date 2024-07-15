const form = document.querySelector('form')
// this usecase will give us empty 
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function(e){
// we use prevent default to basically prevent the default submit action
// The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. 
       e.preventDefault();
       // .value is used to basically get the value of the height 
       // and also we know that we get the value in the string format 
       // so we have to convert the value into integer , so we will use 
       // parseInt
       // hum event k andar value ko lena chahte hai , oe agar hum height bhar lete hai to empty value aa jayegi 

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

    

   if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `Please give a valid height ${height}`;
   }
   else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
 }
   else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `BMI is ${bmi}`
   }
   
//    const suggestion = document.querySelector('#suggestion');
//    if(bmi > 30 ){
//    suggestion.innerHTML = "Eat more fruits"
//    }
//    else if(bmi < 18.6){
//     results.innerHTML = `You are under weight${weight}`
//    }
});