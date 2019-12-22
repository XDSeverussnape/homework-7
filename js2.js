const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Юля",
  "Жека ти поняв який я чоткий програміст ))"
];

for (i = 0; i < ingredients.length; i++) {
  let el = document.createElement("li");
  const list = document.querySelector("ul");
  el.innerHTML = ingredients[i];
  list.appendChild(el);
}
