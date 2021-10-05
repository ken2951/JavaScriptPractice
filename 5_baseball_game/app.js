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

//3개의 숫자를 입력 받아서 비교
function handleClickbutton() {
  const inputValue = $input.value;
  console.log(inputValue);
}

//결과 출력
//숫자 자리수 일치 S
//숫자 일치 자리수 불일치 B
//숫자 자리수 불일치 O
