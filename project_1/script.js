startTimer(5,"timer");

function startTimer(secs,elem){
    let t = document.getElementById(elem); // call this every single time the function is called - every second
    t.innerHTML = "<h1>00:" + secs + "</h1>";
    if(secs < 1){
        clearTimeout(countDown);
        t.innerHTML = "<h1>00:00</h1>"
    }
    secs--;
    let countDown = 
    setTimeout(startTimer, 1000, secs,elem);


}