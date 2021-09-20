const $window = document.querySelector("#window");
const $buttons = document.querySelector("#button-container");
console.log($buttons);

function handleClickButton(event) {
  console.log("click button");
  const target = event.target;
  console.log(target.id);

  if (target.id === "clear") {
    handleClickClear();
    return;
  }
}

function handleClickClear() {
  console.log("clear");
  $window.textContent = "0";
  //window text 0
  //buff 0 ?
}

$buttons.addEventListener("click", handleClickButton);
