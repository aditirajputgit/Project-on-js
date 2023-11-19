let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumver(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;

        if (userInputVal === "") {
            alert("Enter a Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            })
    }
}
userInputEl.addEventListener("keyup", getFactOfEnteredNumver)