$(document).ready(function () {
  addListeners();
});

var offX;
var offY;
var selectedElement = null; // Variable to store the selected element

function addListeners() {
  var elements = document.querySelectorAll(".draggable");

  for (const element of elements) {
    element.addEventListener("mousedown", function (e) {
      selectedElement = e.target;
      offY = e.clientY - parseInt(selectedElement.offsetTop);
      offX = e.clientX - parseInt(selectedElement.offsetLeft);
      window.addEventListener("mousemove", divMove, true);
    });
  }

  window.addEventListener("mouseup", mouseUp, false);
}

function mouseUp() {
  window.removeEventListener("mousemove", divMove, true);

  // Clear the selected element reference
  if (selectedElement) {
    selectedElement = null;
  }
}

function divMove(e) {
  if (selectedElement) {
    selectedElement.style.position = "absolute";
    selectedElement.style.top = e.clientY - offY + "px";
    selectedElement.style.left = e.clientX - offX + "px";
  }
}
