const $window = document.querySelector("#window");
const $buttons = document.querySelector("#button-container");
const $clear = document.querySelector("#clear");

function handleClickButton(event) {
  console.log("click button");
  const target = event.target;

  if (target.id === "clear") {
    handleClickClear(target);
    return;
  }
}

function handleClickClear(target) {
  console.log("clear");
  target.text;
}

$buttons.addEventListener("click", handleClickButton);
