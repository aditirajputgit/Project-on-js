const input = document.getElementById("defuser");
const timer = document.getElementById("timer")

let countdown = 10;
const timerId = setInterval(function(){
    if(countdown !== -1){
         timer.textContent = countdown;
        countdown -= 1;   
    }
},1000);

input.addEventListener("keydown",function(e){
    let inputtext = input.value;
    if(inputtext === "defuse" && countdown !== 0 && e.key === "Enter" ){
        timer.textContent = "You did it ";
        clearInterval(timerId);
    }
    else if(countdown === 0){
        timer.textContent = "BOOM";
    }
})
