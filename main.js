let image = document.getElementById("test");
let bluerEffect = 100;
image.style.filter = `blur(${bluerEffect}px)`;

let percentageText = document.querySelector(".percent span");

let percentageInterval = setInterval(function () {
  image.style.filter = `blur(${--bluerEffect}px)`;
  if (percentageText.innerHTML == 100) {
    clearInterval(percentageInterval);
    setTimeout(() => percentageText.parentElement.remove(), 500);
    return;
  }
  percentageText.innerHTML++;
}, 30);
