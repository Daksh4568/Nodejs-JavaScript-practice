const clock = document.getElementById('clock')

// document.getElementById('clock')

setInterval(function(){
    // The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
    let date = new Date();
    // console.log(date.toLocaleDateString());
    //but we didnt want to run time on console , we want to update the node every second
    clock.innerHTML= date.toLocaleTimeString();
    // or we can use tolocaledatestring to basically change the date 
   
} , 1000)
