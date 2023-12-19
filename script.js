function Circles(){
    bubbles=""
    for(var i=0;i<=143;i++){
        let rn = Math.floor(Math.random()*10);

      bubbles += `<div class="bubbleStyle">${rn}</div>`
      document.querySelector("#pbtm").innerHTML=bubbles;
     
    }
}
Circles()



let timer = 60;

function countdown() {
    document.querySelector("#timerval").innerHTML = timer--;

    if (timer < 0) {
        clearInterval(intervalId);
        alert("Time's up!");
    }
}

const intervalId = setInterval(countdown, 1000);
countdown();



function Hitnum(){
    let hitNUm=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").innerHTML=hitNUm;

}
Hitnum()
function score() {
    var pbtmValue = document.getElementById("pbtm").value;
    var hitValue = document.getElementById("hitvalue").value;

    if (pbtmValue === hitValue) {
        document.getElementsByClassName("bubbleStyle").style.backgroundColor="red";

    } else {
         document.getElementsByClassName("bubbleStyle").style.backgroundColor="blue";
    }
}

score();
