window.addEventListener("DOMContentLoaded", randomAdvice);

const randomButton = document.getElementById("randomButton");
const adviceBlock = document.getElementById("advice-block");
const adviceId = document.getElementById("advice-id");
async function randomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  adviceId.innerText = data.slip.id;
  adviceBlock.innerText = data.slip.advice;

  console.log(data.slip.advice);
}

randomButton.addEventListener("click", randomAdvice);
