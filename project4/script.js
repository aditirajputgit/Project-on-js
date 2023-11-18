let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function onApplyButton() {
    let bgColorInputElementvalue = bgColorInputElement.value;
    customButtonElement.style.backgroundColor = bgColorInputElementvalue;
    let fontColorInputElementvalue = fontColorInputElement.value;
    customButtonElement.style.color = fontColorInputElementvalue;
    let fontSizeInputElementvalue = fontSizeInputElement.value;
    customButtonElement.style.fontSize = fontSizeInputElementvalue;
    let fontWeightInputElementvalue = fontWeightInputElement.value;
    customButtonElement.style.fontWeight = fontWeightInputElementvalue;
    let paddingInputElementvalue = paddingInputElement.value;
    customButtonElement.style.padding = paddingInputElementvalue;
    let borderRadiusInputElementvalue = borderRadiusInputElement.value;
    customButtonElement.style.borderRadius = borderRadiusInputElementvalue;
}