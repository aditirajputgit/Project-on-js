const hour = document.getElementById("hoursInput");
const min = document.getElementById("minutesInput");
const button = document.getElementById("convertBtn");
const time = document.getElementById("timeInSeconds");
const btns = document.getElementById("btns");

const sec = function() {
    let hours = parseInt(hour.value);
    let mins = parseInt(min.value);
    let secs = hours * 60 *60 + mins*60;
    btns.textContent = secs;
    console.log(secs);   
};

button.addEventListener("click", function() {
    if(hour.value === ""){
        time.textContent = "Please enter the number of hour";
    }
    else if(min.value === ""){
        time.textContent = "Please enter the number of mins";
    }else{
       sec();   
    }
});