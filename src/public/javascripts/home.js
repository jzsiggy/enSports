window.addEventListener('scroll', () => {
  let buttons = document.querySelectorAll('.menu > div > a');

  let hambMenu = document.querySelectorAll('.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after');

  console.log(hambMenu);
  let scrollHeight = window.pageYOffset;
  if ( scrollHeight > screen.height ) {
    for (btn of buttons) {
      btn.style.color = "black";
    }
    for (element of hambMenu) {
      element.style.backgroundColor = "black";
    }
  } else {
    for (btn of buttons) {
      btn.style.color = "white";
    }
    for (element of hambMenu) {
      element.style.backgroundColor = "white";
    }
  }
});