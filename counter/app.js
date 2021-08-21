/*
# Counter

> 간단한 카운터를 만들어보자.

![카운터](../../assets/screenshots/counter.png)

위의 이미지처럼 버튼 3개가 존재하고 버튼을 누름에 따라서 해당 결과값이 표시된다.

버튼 기능

- Increase : 표시되는 결과값이 1 증가한다.
- Decrease : 표시되는 결과값이 1 감소한다.
- Reset : 초기화 버튼
 */

const $result = document.querySelector("#result");
console.log($result);

// const $increase = document.querySelector("#increase");
// console.log($increase);

// const $reset = document.querySelector("#reset");
// console.log($reset);

// const $decrease = document.querySelector("#decrease");
// console.log($decrease);

let result = $result.textContent;
console.log(result);

document.querySelector("#increase").addEventListener("click", onClickButton);
document.querySelector("#reset").addEventListener("click", onClickButton);
document.querySelector("#decrease").addEventListener("click", onClickButton);

const onClickButton = (event) => {
  switch (event.target.textContent) {
    case "+":
      $result.textContent += 1;
      break;
    case "reset":
      $result.textContent = 0;
      break;
    case "-":
      $result.textContent -= 1;
      break;
    default:
      break;
  }
};
