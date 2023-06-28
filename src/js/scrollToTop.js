const scrollButton = document.querySelector('.btn_scroll');

scrollButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', toggleButtonVisibility);

function toggleButtonVisibility() {
  if (window.pageYOffset <= 200) {
    scrollButton.style.opacity = '0';
  } else {
    scrollButton.style.opacity = '1';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



