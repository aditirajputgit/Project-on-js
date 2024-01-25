let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordColor = ["red","blue","pink","purple","black","green","lightGreen" , "skyblue" , "orange","red","babypink","yellow"]

let wordsContainerEl = document.getElementById("wordsContainer");
let spanEl = document.createElement("span");
wordsContainerEl.appendChild(spanEl);

let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40 + 1);
    let randomColor = wordColor[Math.ceil(Math.random()*wordColor.length+1)]
    
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize + "px";
    wordEl.style.color = randomColor;
    wordsContainerEl.appendChild(wordEl);
}
for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}