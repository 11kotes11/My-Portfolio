const skill = document.getElementsByClassName('skill');
const favicon = document.getElementsByClassName('favicon');

skill.addEventListener("click", scale);

function scale() {
  favicon.style.width= "70px";
}