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
    }
});
add.addEventListener("click",added)
subtract.addEventListener("click",subtracted)
multiply.addEventListener("click",multiplied)
divide.addEventListener("click",divided)
operationButton.addEventListener("click",operate)
function added(){
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
function subtracted(){
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "-"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        //firstDisplay.parentNode.insertBefore(secondDisplay,firstDisplay);
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
function multiplied(){
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "X"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
    //firstDisplay.parentNode.insertBefore(secondDisplay,firstDisplay);
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
function divided(){
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "÷"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        //firstDisplay.parentNode.insertBefore(secondDisplay,firstDisplay);
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
    // secondDisplay.classList.remove("second-display");
 }
 function signscalculate(){
     if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
         calculate()
     }
 }