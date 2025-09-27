startTimer(5,"timer");

function startTimer(secs,elem){
    let t = document.getElementById(elem);
     // call this every single time the function is called - every second
     if(secs.toString().lenght == 1){
        t.innerHTML = "<h1>00: " + secs +  "</h1>";
     }else{
          t.innerHTML = "<h1>00:" + secs + "</h1>";
     }
  
    if(secs < 1){
        t.innerHTML = "<h1>00:00</h1>"
        clearTimeout(countDown);
    }
    secs--;
    let countDown = 
    setTimeout(startTimer, 1000, secs,elem);


}