let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");

const displayresult = function(e){
    fetch("https://gorest.co.in/public-api/users" , {method: 'GET'},).then(function(response){
        console.log(response.status);
        requestStatusEl.textContent = response.status
        return response.json();
    }).then(function(data){
        const jsondata = JSON.stringify(data);
        httpResponseEl.textContent = jsondata;
    })
}

sendGetRequestBtnEl.addEventListener("click",displayresult);