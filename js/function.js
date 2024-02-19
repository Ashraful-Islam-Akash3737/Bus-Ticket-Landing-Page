function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const number = parseInt(text);
    element.innerText = number - value;

}
function setSeatValueById(elementId, value) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const number = parseInt(text);
    element.innerText = number + value;

}

function getInnerTextToNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const finalPrice = parseInt(elementText);
    return finalPrice;
}
function setValueById (elementId, value){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const finalPrice = parseInt(elementText); 
    element.innerText = finalPrice + value;
}

function getInnerValueById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.value;
    return text;
    
}




