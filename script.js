const reset = document.getElementById("clear-btn");
const btns = document.querySelectorAll("button");
const display = document.querySelector("h1");


let num = 0;
let operator = '';
let nextNum = false; 

let number1;
function clicked(number){

        if(nextNum){
                display.textContent = number;
                nextNum = false;
        }
        else{       
                let Value = display.textContent;
                display.textContent = Value === '0'? Value = number : Value = display.textContent + number;
        }
}

function decimalcheck(){

        if (nextNum) return;  

        if(!display.textContent.includes('.')){
        display.textContent = `${display.textContent}.`
        
     }
}

const calculation = {
        '/':(firstnum,secondnum) => firstnum/secondnum,
        '+':(firstnum,secondnum) => firstnum+secondnum,
        '*':(firstnum,secondnum) => firstnum*secondnum,
        '-':(firstnum,secondnum) => firstnum-secondnum,
        '=':(secondnum) => secondnum
}

function operation(op){
        if(operator && nextNum){
              operator = op;
                return;
        } 
       const currentValue = Number(display.textContent);
       if(!num){
             num = currentValue;
             
       }
       else{
        //       console.log("currentVAlue",currentValue);
         const calculate = calculation[operator](num,currentValue);
         console.log(calculate);
         num = calculate;
         display.textContent = calculate;
        }

       nextNum = true;
       operator = op;
}


btns.forEach((btn)=>{
 if(btn.classList.length === 0 ){
     btn.addEventListener("click",()=>clicked(btn.value));
 }

 else if(btn.classList.contains("operator")){
        btn.addEventListener("click",()=> operation(btn.value));
 }
 else if(btn.classList.contains("decimal")){
        btn.addEventListener("click",()=> decimalcheck(btn.value));
 }

});


function resetting(){
        num = 0;
        operator = '';
        nextNum = false; 
        display.textContent = "0";
}
reset.addEventListener("click",resetting);
