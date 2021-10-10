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
//랜덤 숫자 확인용
console.log(numArray);

let inputValue;
//3개의 숫자를 입력 받아서 비교
function handleClickbutton() {
  inputValue = $input.value;
  let result = checkNumber(inputValue);
  // $window.textContent = result;
  //결과 확인용
  console.log(result);
}

//결과 출력
//숫자 자리수 일치 S
//숫자 일치 자리수 불일치 B
//숫자 자리수 불일치 O
function checkNumber(inputValue) {
  let resultArray = [];
  const inputArray = inputValue.split("");
  //입력 숫자 확인용
  console.log(inputArray);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        if (numArray[i] === inputArray[j]) {
          resultArray.push("S");
          break;
        }
      }
      if (numArray[i] === inputArray[j]) {
        resultArray.push("B");
        break;
      }
      resultArray.push("O");
    }
  }
  return resultArray;
}
