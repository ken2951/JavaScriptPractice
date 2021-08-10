(function () {
  let cond = true;

  let value1 = "";
  if (cond) {
    value1 = "참";
  } else {
    value1 = "거짓";
  }

  let value2 = cond ? "참" : "거짓";

  console.log(value1);
  console.log(value2);
})();
