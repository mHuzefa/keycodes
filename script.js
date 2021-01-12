const events = document.querySelector(".event");
const keyEvent = document.querySelector(".event-key .event-value");
const keyCodeEvent = document.querySelector(".event-keyCode .event-value");
const CodeEvent = document.querySelector(".event-code .event-value");
const whichEvent = document.querySelector(".event-which .event-value");
const shiftKey = document.querySelector(".key-shift .key-status");
const ctrlKey = document.querySelector(".key-ctrl .key-status");
const altKey = document.querySelector(".key-alt .key-status");
const keyboard = document.querySelector(".keyboard");
const keyRow = keyboard.querySelectorAll(".row-key");
//functionalities
function keyboardEvents(e) {
  e.preventDefault();
  activeKey(e);
  // this condition will find for empty string which will be space
  if (e.key === " ") {
    keyEvent.style.fontStyle = "italic";
    keyEvent.textContent = "(space)"; //instead of printing " ", we will print some text
  } else {
    keyEvent.textContent = e.key;
    keyEvent.style.fontStyle = "normal";
  }
  keyCodeEvent.textContent = e.keyCode;
  CodeEvent.textContent = e.code;
  whichEvent.textContent = e.which;
}

function activeKey(e) {
  //It will find the keys with the same data-key or data-spkey(super keys) and will add class to that key
  keyRow.forEach((key) => {
    if (e.code === key.dataset.spkey) {
      key.classList.add("active");
    } else if (e.keyCode == key.dataset.key) {
      key.classList.add("active");
    }
  });
}
function removeClass() {
  // this will remove the class from element if it contains
  keyRow.forEach((key) => {
    if (key.classList.contains("active")) {
      key.classList.remove("active");
    }
  });
}
function specialKeys(e) {
  shiftKey.textContent = e.shiftKey;
  ctrlKey.textContent = e.ctrlKey;
  altKey.textContent = e.altKey;
}

//eventHandlers

window.addEventListener("keydown", keyboardEvents);
window.addEventListener("keydown", specialKeys);
// by key release, special keys will come to original form
window.addEventListener("keyup", specialKeys);
// When you will release the key, it will remove class
window.addEventListener("keyup", removeClass);

//This event-listner will give the code when clicked on any of keyboard key on page.
keyboard.addEventListener("click", function (e) {
  if (e.target.dataset.key) {
    keyCodeEvent.textContent = e.target.dataset.key;
    whichEvent.textContent = e.target.dataset.key;
    keyEvent.textContent = e.target.innerText;
  }
});
