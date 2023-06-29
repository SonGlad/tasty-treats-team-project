const refs = {
  teamModalContainer: document.querySelector('.footer-backdrop'),
  closeBtn: document.querySelector('.team-modal-close'),
  openModal: document.querySelector('.footer-text-for-flex'),
  backdrop: document.querySelector('.footer-backdrop'),
};
refs.openModal.addEventListener('click', () => {
  refs.teamModalContainer.classList.remove('is-hidden');
  disableScroll();
});
refs.closeBtn.addEventListener('click', () => {
  refs.teamModalContainer.classList.add('is-hidden');
  enableScroll();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    refs.teamModalContainer.classList.add('is-hidden');
    enableScroll();
  }
});
refs.backdrop.addEventListener('click', () => {
  refs.teamModalContainer.classList.add('is-hidden');
  enableScroll();
});

function disableScroll() {
  document.body.classList.add('scroll-lock');
}

function enableScroll() {
  document.body.classList.remove('scroll-lock');
}
