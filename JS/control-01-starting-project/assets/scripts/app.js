const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculation(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operant;
  if (calculationType == "ADD") {
    operant = "+";
    currentResult += enteredNumber;
  } else if (calculationType == "SUBTRACT") {
    operant = "-";
    currentResult -= enteredNumber;
  } else if (calculationType == "MULTIPLY") {
    operant = "*";
    currentResult *= enteredNumber;
  } else if (calculationType == "DIVIDE") {
    operant = "/";
    currentResult /= enteredNumber;
  }
  createAndWriteOutput(operant, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculation("ADD");
}

function subtract() {
  calculation("SUBTRACT");
}

function multiply() {
  calculation("MULTIPLY");
}
function divide() {
  calculation("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
