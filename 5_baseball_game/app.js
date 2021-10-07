const $window = document.querySelector(".window");
const $input = document.querySelector(".input");
const $button = document.querySelector(".button");
$button.addEventListener("click", handleClickbutton);

//임의의 3개의 숫자를 생성
let numArray = [];

while (numArray.length < 3) {
  let num = Math.floor(Math.random() * (10 - 1) + 1);
  if (!numArray.includes(num)) {
    numArray.push(num);
  }
}

console.log(numArray);

let inputValue;
//3개의 숫자를 입력 받아서 비교
function handleClickbutton() {
  inputValue = $input.value;
  let result = checkNumber(inputValue);
  $window.textContent = result;
  console.log(result);
}

function checkNumber(inputValue) {
  let result;
  const inputArray = inputValue.split("");
  console.log(inputArray);
  for (let i = 0; i < 3; i++) {
    if (numArray[i] === inputArray[i]) {
      result = "S";
    }
  }

  return result;
}
//결과 출력
//숫자 자리수 일치 S
//숫자 일치 자리수 불일치 B
//숫자 자리수 불일치 O
