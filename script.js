let calculatorDisplay = document.getElementById("calculatorDisplay")
let NumberButton = document.querySelectorAll(".numbers")
let firstDisplay = document.querySelector(".first-display")
let dummyDisplay = document.querySelector(".dummy-display")
let add = document.querySelector(".add-btn")
let subtract = document.querySelector(".subtract-btn")
let multiply = document.querySelector(".multiply-btn")
let divide = document.querySelector(".divide-btn")
let operationButton = document.querySelector(".operation-btn")
let secondDisplay = document.createElement("div");
NumberButton.forEach(button => {
   button.addEventListener("click",eachnumber)
    function eachnumber(){
      firstDisplay.textContent += button.textContent
    }
});
add.addEventListener("click",added)
//subtract.addEventListener("click",subtracted)
multiply.addEventListener("click",multiply)
//divide.addEventListener("click",divided)
operationButton.addEventListener("click",operate)
function added(){
    calculatorDisplay.appendChild(secondDisplay);
    firstDisplay.parentNode.insertBefore(secondDisplay,firstDisplay);
    secondDisplay.classList.toggle("second-display");
    dummyDisplay.classList.remove("dummy-display");
    secondDisplay.textContent = firstDisplay.textContent
    if(firstDisplay.textContent === "")return
    else{
        clearFirstDisplay()
    }
}
 function operate(){
    calculate()
 }
function clearFirstDisplay(){
    firstDisplay.textContent = ""
}
 function calculate(){
     let calculate = +firstDisplay.textContent + +secondDisplay.textContent
     firstDisplay.textContent = calculate;
     secondDisplay.classList.remove("second-display");
 }
