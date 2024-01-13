function toggleFirstName(){
    const para1 = document.getElementById("para1");
    if(para1.innerHTML === ""){
        para1.classList.add("first");
        para1.innerHTML = "Joe";
    }
    else{
        para1.innerHTML = "";
        para1.classList.remove("first");
    }
}

function toggleLastName(){
    const para1 = document.getElementById("para2");
    if(para1.innerHTML === ""){
        para1.classList.add("first");
        para1.innerHTML = "Johnas";
    }
    else{
        para1.innerHTML = "";
        para1.classList.remove("first");
    }
    
}