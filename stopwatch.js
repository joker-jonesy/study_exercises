// in html, create a stopwatch vanilla js
//format should be 00:00 seconds/miliseconds
//should be able to start/stop/reset

let seconds = 00;
let milis = 00;
let interval;

const secondsContainer = document.getElementById("seconds");
const milisContainer = document.getElementById("milis");

document.getElementById("button-start").addEventListener("click", function(){
    clearInterval(interval)
    // you can change the 10 to a lower value for testing purposes
    interval =setInterval(timer, 10)
})

document.getElementById("button-stop").addEventListener("click", function (){
    clearInterval(interval)
})

document.getElementById("button-reset").addEventListener("click", function (){
    clearInterval(interval);
    milis=0;
    seconds=0;
    milisContainer.innerHTML="0"+milis;
    secondsContainer.innerHTML="0"+seconds;
})

function timer(){
    milis++;

    if(milis<=9){
        milisContainer.innerHTML="0"+milis;
    }

    if(milis>9){
        milisContainer.innerHTML=milis;
    }

    if(milis>99){
        seconds++;
        secondsContainer.innerHTML="0"+seconds;
        milis=0;
        milisContainer.innerHTML="0"+milis;
    }

    if(seconds>9){
        secondsContainer.innerHTML=seconds;
    }



}