const refs = {
  teamModalContainer: document.querySelector('.footer-backdrop'),
  closeBtn: document.querySelector('.team-modal-close'),
  openModal: document.querySelector('.footer-text-for-flex'),
  backdrop: document.querySelector('.footer-backdrop'),
  audio: document.getElementById('myAudio'),
};

refs.openModal.addEventListener('click', () => {
  refs.teamModalContainer.classList.remove('is-hidden');
  disableScroll();
  refs.audio.play();
});

refs.audio.volume = 0.08;
refs.closeBtn.addEventListener('click', () => {
  refs.teamModalContainer.classList.add('is-hidden');
  enableScroll();
  stopMusic();
});


document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    refs.teamModalContainer.classList.add('is-hidden');
    enableScroll();
    stopMusic();
  }
});

refs.backdrop.addEventListener('click', () => {
  refs.teamModalContainer.classList.add('is-hidden');
  enableScroll();
  stopMusic();
});


function disableScroll() {
  document.body.classList.add('scroll-lock');
};

function enableScroll() {
  document.body.classList.remove('scroll-lock');
};


function stopMusic() {
  refs.audio.pause();
  refs.audio.currentTime = 0;
};
