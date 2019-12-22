const btn = document.querySelector("input");
const value = document.querySelector("span");

console.log(btn);
console.log(value);

btn.addEventListener("input", e => {
  if (btn.value == "") {
    value.textContent = "незнакомец";
  } else {
    value.textContent = e.target.value;
  }
});
