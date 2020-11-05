const colors = ["Green", "Red", "Blue", "Yellow", "Orange", "Violet"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  console.log(document.body);
  // Get random number between 0 and 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
  console.log(getRandomNumber);
} 