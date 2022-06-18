let clearButton = document.getElementById("clear-btn")
let deleteButton = document.getElementById("del-btn")
let calculatorDisplay = document.getElementById("calculatorDisplay");
let secondDisplayContainer = document.querySelector(".secondDisplayContainer");
let signs = document.querySelector(".signs");
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
      add.disabled = false
      subtract.disabled = false
      multiply.disabled = false
      divide.disabled = false
    }
});
add.addEventListener("click",added)
subtract.addEventListener("click",subtracted)
multiply.addEventListener("click",multiplied)
divide.addEventListener("click",divided)
operationButton.addEventListener("click",operate)
clearButton.addEventListener("click",allclear)
deleteButton.addEventListener("click",deleteCurrentDisplay)
function deleteCurrentDisplay(){
 firstDisplay.textContent = firstDisplay.textContent.substring(0, firstDisplay.textContent.length -1);
}
function allclear(){
    firstDisplay.textContent = ""
    secondDisplay.textContent = ""
    signs.textContent = ""
}
add.disabled = true
function added(){
disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "+"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        //firstDisplay.parentNode.insertBefore(secondDisplay,firstDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "+"
      if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        } 
    }
}
subtract.disabled = true
function subtracted(){
   disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "-"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "-"
        if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        }
    }
}
multiply.disabled = true
function multiplied(){
 disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "X"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
    secondDisplay.classList.toggle("second-display");
    dummyDisplay.classList.remove("dummy-display");
    secondDisplay.textContent =  firstDisplay.textContent;
    signs.textContent = "X"
    if(firstDisplay.textContent === "")return
    else{
        clearFirstDisplay()
    } 
    }
}
divide.disabled = true
function divided(){
    disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "÷"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "÷"
        if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        }
    }
}
 function operate(){
    calculate()
 }
function clearFirstDisplay(){
    firstDisplay.textContent = ""
}
 function calculate(){
    let autocalculate;
     if(signs.textContent === "+"){
     autocalculate = +secondDisplay.textContent + +firstDisplay.textContent
     }
     else if(signs.textContent === "-"){
     autocalculate = +secondDisplay.textContent - +firstDisplay.textContent
     }
     else if(signs.textContent === "X"){
        autocalculate = +secondDisplay.textContent * +firstDisplay.textContent
     }
     else if(signs.textContent === "÷"){
        autocalculate = +secondDisplay.textContent / +firstDisplay.textContent
     }
     firstDisplay.textContent = autocalculate;
     secondDisplay.textContent = ""
     signs.textContent = ""
 }
 function signscalculate(){
     if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
         calculate()
     }
 }
function disableButtonRepeat(){
    add.disabled = true
    divide.disabled = true
    subtract.disabled = true
    multiply.disabled = true
}
 

