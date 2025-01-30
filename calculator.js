
const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#display");
const  clear=document.querySelector("#clear");
const  delet=document.querySelector("#delete");
const  percent=document.querySelector("#percent");
const  divide=document.querySelector("#divide");
const  seven=document.querySelector("#seven");
const  eight=document.querySelector("#eight");
const  nine=document.querySelector("#nine");
const  multiply=document.querySelector("#multiply");
const  four=document.querySelector("#four");
const  five=document.querySelector("#five");
const  six=document.querySelector("#six");
const  sub=document.querySelector("#sub");
const  one=document.querySelector("#one");
const  two=document.querySelector("#two");
const  three=document.querySelector("#three");
const  add=document.querySelector("#add");
const  zero=document.querySelector("#zero");
const  doubzero=document.querySelector("#doubzero");
const  dot=document.querySelector("#dot");
const  equal=document.querySelector("#equal");

let currentInput="";

buttons.forEach((button) =>{
    button.addEventListener("click",() => {
    const buttonValue = button.getAttribute("Id") || button.textContent;
    console.log("choice was clicked",buttonValue);
    if(buttonValue === "clear"){
        currentInput =""; //clear display
    }
    else if(buttonValue === "delete"){
        currentInput= currentInput.slice(0,-1); //remove last charecter
    }
    else if(buttonValue === "equal"){
        try {
            currentInput = eval(currentInput);
        } catch {
            currentInput = "Syntax Error";
        } 
    }
    else{
        currentInput = currentInput + button.textContent;   //append clicked button text
    }
    display.value=currentInput; //update the display
    display.innerText=currentInput;

});
});
