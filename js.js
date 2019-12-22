const el = document.querySelectorAll("h2");
const items = document.querySelectorAll(".item > ul");

let arr = [];
const element = el.forEach((item, i) => {
  return (arr[i] = item.innerText);
});

let array = [];
const elementId = items.forEach((item, i) => {
  return (array[i] = item.childElementCount);
});

let newObj = {};

for (let index = 0; index < arr.length; index++) {
  newObj[arr[index]] = array[index];
}

for (let key in newObj) {
  console.log(`В каегории ${key} находится - ${newObj[key]} елемента`);
}
