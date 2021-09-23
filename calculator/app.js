const $window = document.querySelector("#window");
const $buttons = document.querySelector("#button-container");

let num1;
let num2;
let operator;

function handleClickButton(event) {
  const className = event.target.className;
  const textContent = event.target.textContent;

  if (className.includes("clear")) {
    handleClickAllClear();
    return;
  }

  if (className.includes("number")) {
    handleClickNumber(textContent);
    return;
  }

  if (className.includes("operator")) {
    handleClickOperator(textContent);
    return;
  }
}

function handleClickAllClear() {
  $window.textContent = "0";
  [num1, num2, operator] = [null, null, null]; // 초기화?
}

function handleClickNumber(textContent) {
  if (!operator) {
    num1 += textContent;
  } else {
    num2 += textContent;
  }
  console.log(num1);
}

function handleClickOperator(textContent) {
  //
}

$buttons.addEventListener("click", handleClickButton);
