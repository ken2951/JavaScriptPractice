const $result = document.querySelector("#result");
const $increase = document.querySelector("#increase");
const $reset = document.querySelector("#reset");
const $decrease = document.querySelector("#decrease");

const onClickButton = (event) => {
  let result = Number($result.textContent);
  switch (event.target.textContent) {
    case "+": {
      result += 1;
      $result.textContent = result;
      break;
    }
    case "reset": {
      result = 0;
      $result.textContent = result;
      break;
    }
    case "-": {
      result -= 1;
      $result.textContent = result;
      break;
    }
    default:
      break;
  }
};

$increase.addEventListener("click", onClickButton);
$reset.addEventListener("click", onClickButton);
$decrease.addEventListener("click", onClickButton);
