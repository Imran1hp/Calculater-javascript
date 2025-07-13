const display  = document.querySelector('.display');
function buttonNum(button){
display.value += button;
}
function clearDisplay(){
 display.value ="";
}
function calculate (){
   
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
