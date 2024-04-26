const yellowBtn = document.getElementById("yellow");
const orangeBtn = document.getElementById("orange");
const blackBtn = document.getElementById("black");

function changeColor(color) {
  return function change() {
    document.body.style.backgroundColor = color;
  };
}

yellowBtn.onclick = changeColor("yellow");
orangeBtn.onclick = changeColor("orange");
blackBtn.onclick = changeColor("black");
