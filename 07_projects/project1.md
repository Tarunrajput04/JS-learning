# project related to dom
<!-- Project 1 code -->
## project 1 (color changer)
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    switch(e.target.id){
      case "grey":
        body.style.background=e.target.id;
        break;
      case "blue":
        body.style.background=e.target.id;
      case "white":
        body.style.background=e.target.id;
        break;
      case "yellow":
        body.style.background=e.target.id;
        break;
      case "purple":
        body.style.background=e.target.id;
        break;
    }
  });
});
