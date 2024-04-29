$(document).ready(function () {
  addListeners();

  new TypeIt("#hero-about", {
    speed: 70,
  })
    .type("Hi there!", { delay: 100 })
    .pause(1000)
    .type(" I'm Olivia")
    .pause(200)
    .type(
      ` and I <span id="hero-text-pink">design solutions</span> and make them <span id="hero-text-pink">look pretty</span>.`
    )
    .go();
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

function changeAboutTab(tabIndex) {
  if (tabIndex < 0 || tabIndex > 2) {
    return;
  }

  var aboutTabs = document.querySelectorAll(".about-tab");
  for (const aboutTab of aboutTabs) {
    aboutTab.style.display = "none";
  }
  const tabs = ["about-tab-instagram", "about-tab-media", "about-tab-games"];
  document.getElementById(tabs[tabIndex]).style.display = "block";
}

function changeHeroFocus(focusPicture) {
  console.log("focusPicture", focusPicture);
  if (focusPicture) {
    document.getElementById("hero-likes").style.zIndex = 1;
    document.getElementById("hero-picture").style.zIndex = 2;
  } else {
    document.getElementById("hero-likes").style.zIndex = 2;
    document.getElementById("hero-picture").style.zIndex = 1;
  }
}
