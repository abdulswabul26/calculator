
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const display = document.getElementById("display");


// appending the clicked 
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        display.textContent += button.value;
    })
});

clear.addEventListener("click",()=>{
    display.textContent = clear.value;
});


let expression = display.textContent;

equal.addEventListener("click", ()=>{
    try{
        const expression = display.textContent;
        const result = eval(expression);
        display.textContent = result;
    } catch(error){
        display.textContent = "Error";
    }
}
)