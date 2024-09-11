// Author         : Khaleel
// Created_Date   : 10-09-2024

//---------------------------------start-------------------------------

const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const six=document.getElementById("six");
const five=document.getElementById("five");
const four=document.getElementById("four");
const three=document.getElementById("three");
const two=document.getElementById("two");
const one=document.getElementById("one");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const into=document.getElementById("into");
const divide=document.getElementById("divide");
const zero=document.getElementById("zero");
const clr=document.getElementById("clr");
const equal=document.getElementById("equal");
const myinput=document.getElementById("myinput");

let expression="";

seven.onclick = function(){
    expression+="7";
    myinput.value=expression;
}
eight.onclick = function(){
    expression+="8";
    myinput.value=expression;
}
nine.onclick = function(){
    expression+="9";
    myinput.value=expression;
}
six.onclick = function(){
    expression+="6";
    myinput.value=expression;
}
five.onclick = function(){
    expression+="5";
    myinput.value=expression;
}
four.onclick = function(){
    expression+="4";
    myinput.value=expression;
}
three.onclick = function(){
    expression+="3";
    myinput.value=expression;
}
two.onclick = function(){
    expression+="2";
    myinput.value=expression;
}
one.onclick = function(){
    expression+="1";
    myinput.value=expression;
}
zero.onclick = function(){
    expression+="0";
    myinput.value=expression;
}
clr.onclick = function(){
    expression="";
    myinput.value=expression;
}
plus.onclick = function(){
    expression+="+";
    myinput.value=expression;
}
minus.onclick = function(){
    expression+="-";
    myinput.value=expression;
}
into.onclick = function(){
    expression+="*";
    myinput.value=expression;
}
divide.onclick = function(){
    expression+="/";
    myinput.value=expression;
}
equal.onclick = function(){
    if(expression=="")
        {
            myinput.value=eval(myinput.value);
        } 
    else{
        expression=eval(expression);
        myinput.value=expression;
    }
} 