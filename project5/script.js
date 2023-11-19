const start = document.getElementById("startBtn");
const counter = document.querySelector("#counter");
const from = document.getElementById("from");
const to = document.getElementById("to");

let timerId ;
const displaynumbers = function(fromc,toc){
    let currentCount = fromc;
    counter.textContent = currentCount;     
     let timerId = setInterval(function () {
         if (currentCount < toc) {
        currentCount += 1;
        counter.textContent = currentCount;  
      } else {
       clearInterval(timerId);
    }
     },1000);
};

const startButton = function(){
    let fromc = parseInt(from.value);
    let toc = parseInt(to.value);
    if(fromc === "" || toc === ""){
        alert("Please enter the value");
    }
    else{
        displaynumbers(fromc,toc);
    }
}

start.addEventListener("click",function(){
    startButton();
})