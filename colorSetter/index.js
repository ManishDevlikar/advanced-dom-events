const colorBtn = document.getElementById("color");
const inputField = document.getElementById("input");

function changeColor(color) {
  return (document.body.style.backgroundColor = color);
}

colorBtn.addEventListener("click", () => {
  let color = inputField.value;
  changeColor(color);
});
