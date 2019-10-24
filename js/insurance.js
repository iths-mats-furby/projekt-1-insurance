function rotate() {
  anime({
    targets: "button",
    rotate: "1turn",
    duration: 2000
  });
  let myButton = event.currentTarget;
  setTimeout(function() {
    window.location = myButton.getAttribute("go");
  }, 2000);
}

let iBtn = document.querySelector(".index-page");
iBtn.addEventListener("click", rotate);
let cBtn = document.querySelector(".contact-page");
cBtn.addEventListener("click", rotate);
