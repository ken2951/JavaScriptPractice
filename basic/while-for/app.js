function whileExample() {
  let i = 0;
  while (i < 100) {
    console.log(i + 1);
    i++;
  }
}

function forExample() {
  for (let i = 0; i < 100; i++) {
    console.log(i + 1);
  }
}

//whileExample();
//forExample();

// let i = 0;
// if (i % 2 === 0) {
//   console.log("true");
// }

function forExample2() {
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
      if (j % 2 === 0) continue;
      for (let k = 0; k < 5; k++) {
        if (k % 2 === 0) continue;
        console.log(i, j, k);
      }
    }
  }
}

// forExample2();

//구구단
function gugudan() {
  for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) continue; //짝수라면 넘어가기
    for (let j = 1; j < 10; j++) {
      if (j % 2 === 0) continue; //짝수라면 넘어가기
      console.log(i + " X " + j + " = " + i * j);
    }
  }
}

// gugudan();
