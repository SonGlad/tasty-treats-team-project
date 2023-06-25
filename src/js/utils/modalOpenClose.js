const modalOpenClose = () => {
  const refs = {
    openModalBtn: document.querySelector('.event-order'),
    closeModalBtn: document.querySelector('.close'),
    modal: document.querySelector("[data-modal]"),
    modalContent: document.querySelector('.modal'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", (event) => {
    event.stopPropagation()
      toggleModal()
  });

  refs.modalContent.addEventListener("click",  (event) => {
  event.stopPropagation()
  });

  refs.modal.addEventListener("click",  (event) => {
  event.stopPropagation()
    toggleModal()
  });
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      toggleModal();
    }
  });

  function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  }
};

export default modalOpenClose;