//임의의 3개의 숫자를 생성
//3개의 숫자를 입력 받아서 비교
//결과 출력
//숫자 자리수 일치 S
//숫자 일치 자리수 불일치 B
//숫자 자리수 불일치 O

let numArray = [];

while (numArray.length < 4) {
  let num = Math.floor(Math.random() * (10 - 1) + 1);
  if (numArray.includes(num)) {
    numArray.push();
  }
}
console.log(numArray);
