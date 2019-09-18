var currentOperator; //Holds what operator you hit
var firstValue; //Holds the number before the operator
var secondValue; //Holds the number after the operator


//Gives the current number displayed on the screen
function screenDisplay() {
  var screenDisplay = document.getElementById('display').innerHTML;
  return screenDisplay;
}

//Hit button make number display
function display(input) {
  document.getElementById('display').innerHTML = "";
  var i = input;
  var display = document.getElementById('display').innerHTML + i;
  document.getElementById('display').innerHTML = display;
  var sd = screenDisplay();
}

//Hit operator button
function operator(input) {
  var operator = input;
  getFirstValue();
  currentOperator = operator;
  document.getElementById('display').innerHTML = "";
}

//Save first value into variable
function getFirstValue(){
  firstValue = screenDisplay();
  console.log(firstValue);
}

//Save second value into variable
function getSecondValue(){
  secondValue = screenDisplay();
  console.log(secondValue);
}

//Hit button solve equation
function answer() {
  var answer;

  getSecondValue();

  console.log(currentOperator);

  if(currentOperator == '*') {
    answer = +firstValue * +secondValue;
  } else if(currentOperator == '/') {
    answer = +firstValue / +secondValue;
  } else if(currentOperator == '-') {
    answer = +firstValue - +secondValue;
  } else if(currentOperator == '+'){
    answer = +firstValue + +secondValue;
  }
  document.getElementById('display').innerHTML = answer;
  console.log(answer);
}

//All Clear
function allClear() {
  document.getElementById('display').innerHTML = "0";
  firstValue = 0;
  secondValue = 0;
  currentOperator = "";
}
