window.addEventListener('scroll', () => {
  let buttons = document.querySelectorAll('.menu > div > a');

  let scrollHeight = window.pageYOffset;
  if ( scrollHeight > window.innerHeight * 0.90 ) {
    for (btn of buttons) {
      btn.style.color = "black";
    }
  } else {
    for (btn of buttons) {
      btn.style.color = "white";
    }
  }
});