const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", e => {
  span.style.fontSize = `${e.target.value}px`;
});
