
const discoverBtn = document.querySelector('.discover-content')
const burgerIcon = document.querySelector('.burger-icon')
discoverBtn.addEventListener('click', myFunction)
function myFunction() {
  burgerIcon.classList.toggle("change");
}
