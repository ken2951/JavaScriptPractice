(function () {
  const arr = ["가", "라", "다", "라", "마", "라"];

  while (true) {
    let index = arr.indexOf("라");
    if (index === -1) break;
    arr.splice(index, 1);
  }

  console.log(arr);
})();
