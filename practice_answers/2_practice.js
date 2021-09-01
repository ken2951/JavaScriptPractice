function getRandomNumber(num1, num2) {
  //return random number;
}

function init() {
  alert(
    "두 숫자를 입력해주세요.\n(첫번째 숫자는 두번째 숫자보다 작아야합니다.)"
  );
  let num1;
  let flag1 = false;
  let message1 = "첫번째 숫자를 입력해주세요.";
  while (!flag1) {
    num1 = Number(prompt(message1));
    flag1 = !isNaN(num1) ? true : false;
    message1 = "첫번째 숫자를 입력해주세요.\n(숫자를 입력해주세요.)";
  }
  let num2;
  let flag2 = false;
  let message2 = "두번째 숫자를 입력해주세요.";
  while (!flag2) {
    num2 = Number(prompt(message2));
    flag2 = !isNaN(num2) && num1 < num2 ? true : false;
    message2 =
      "두번째 숫자를 입력해주세요.\n(첫번째 숫자보다 큰 숫자를 입력해주세요.)";
  }
  return console.log(getRandomNumber(num1, num2));
}

init();
