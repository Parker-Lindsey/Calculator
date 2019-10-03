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
  var inputNumber = input;
  var currentDisplay = screenDisplay();
  var newDisplay = currentDisplay + inputNumber;

  if(currentDisplay == 0  || currentDisplay == '+' || currentDisplay == '-' || currentDisplay == '/' || currentDisplay == '*') {
    document.getElementById('display').innerHTML = inputNumber;
  } else {
    document.getElementById('display').innerHTML = newDisplay;
  }
  console.log(inputNumber, newDisplay);
}

//Hit operator button
function operator(input) {
  var sd = screenDisplay();
  var operator = input;
  getFirstValue();
  currentOperator = operator;
  document.getElementById('display').innerHTML = operator;
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

  if(Number.isInteger(answer)) {
      document.getElementById('display').innerHTML = answer;
  } else if(!(Number.isInteger(answer))) {
    document.getElementById('display').innerHTML = answer.toFixed(10);
  }

  if (Number.isNaN(answer)) {
    document.getElementById('display').innerHTML = "Undefined";
  }
}

//All Clear
function allClear() {
  document.getElementById('display').innerHTML = "0";
  firstValue = 0;
  secondValue = 0;
  currentOperator = "";
}
