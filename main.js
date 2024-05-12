let image = document.getElementById("test");
let bluerEffect = 100;
image.style.filter = `blur(${bluerEffect}px)`;
let percentageText = document.querySelector(".percent span");
let seconds = 100;
makeAnimation();
function makeAnimation() {
  let percentageTimeOut = setTimeout(function () {
    image.style.filter = `blur(${--bluerEffect}px)`;
    if (percentageText.innerHTML == 100) {
      clearTimeout(percentageTimeOut);
      setTimeout(() => percentageText.parentElement.remove(), 500);
      return;
    }
    percentageText.innerHTML++;
    seconds --;
    makeAnimation();
  }, seconds);
}
