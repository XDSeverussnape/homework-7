let counterValue = 0;
const btn = document.querySelectorAll("button");
const value = document.querySelector("span");

const increment = () => {
  return ++counterValue;
};
const decrement = () => {
  return --counterValue;
};

btn[1].addEventListener("click", () => {
  value.innerText = increment();
});
btn[0].addEventListener("click", () => {
  value.innerText = decrement();
});

//for (i = 0; i < btn.length; i++) {
//  console.log(btn[i]);
//}
