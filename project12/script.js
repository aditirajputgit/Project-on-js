let count = document.getElementById("count")
let para = document.getElementById("para")
let nums = 0;
count.innerHTML = nums;
para.innerHTML = "Count is Even"
function onClickButton(){
    let num = Math.floor(Math.random()*100+1);
    console.log(nums,num);
    nums = nums + num;
    count.innerHTML = nums;
    if(nums%2 === 0 ){
        para.innerHTML = "Count is Even";
    }
    else{
        para.innerHTML = "Count is Odd"
    }
    
}