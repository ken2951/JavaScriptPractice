const $buttons = document.querySelectorAll("button");
const $background = document.querySelector(".background");

let clickedButton;

const onClickButton = (event) => {
  const target = event.target;
  const color = target.textContent;
  const RESET = "RESET";
  const resetColor = "white";

  if (clickedButton) {
    clickedButton.style.color = resetColor;
    clickedButton.style.background = clickedButton.textContent;
  }

  if (color === RESET) {
    $background.style.background = resetColor;
    return;
  }

  $background.style.background = color;
  target.style.color = color;
  target.style.background = resetColor;

  clickedButton = target;
};

$buttons.forEach((button) => {
  button.addEventListener("click", onClickButton);
});
