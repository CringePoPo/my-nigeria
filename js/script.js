// //   Variables
let hoverStates = document.querySelectorAll('.news-drop');

let dropDowns = document.querySelectorAll('.dropdown-content');

// Looping through the hoverstates
for (let i = 0; i < hoverStates.length; i++) {
  hoverStates[i].addEventListener("mouseenter",function() {
    for (let i = 0; i < hoverStates.length;i++) {
      dropDowns[i].style.display = "none";
    }
    dropDowns[i].style.display = "flex";
  });
}