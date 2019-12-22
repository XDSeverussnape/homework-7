let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');

render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  destroyBoxes();
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 50;
  let boxes = document.getElementById("boxes");
  for (var i = 0; i < amount; i++) {
    var size = basicSize + i * 10;
    var div = document.createElement("div");
    div.classList.add("new");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
