var currentResult = 0;
var logO = "0";
let object1 ={}

function add() {
  var desc = `${currentResult} + ${userInput.value}`;
  logO += `+ ${userInput.value}`;
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, desc, logO);
}

function sub() {
  var desc = `${currentResult} - ${userInput.value}`;
  logO += `- ${userInput.value}`;
  currentResult -= parseInt(userInput.value);
  outputResult(currentResult, desc, logO);
}

function mul() {
  var desc = `${currentResult} * ${userInput.value}`;
  logO += `* ${userInput.value}`;
  currentResult *= parseInt(userInput.value);
  outputResult(currentResult, desc, logO);
}

function div() {
  var desc = `${currentResult} / ${userInput.value}`;
  logO += `/ ${userInput.value}`;
  currentResult /= parseInt(userInput.value);
  outputResult(currentResult, desc, logO);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);

