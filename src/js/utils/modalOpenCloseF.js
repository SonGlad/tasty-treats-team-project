const modalOpenClose = () => {
  const refs = {
    closeModalBtn: document.querySelector('.close'),
    modal: document.querySelector("[data-modal]"),
    modalContent: document.querySelector('.modal'),
    buttonToSimulateClick: document.querySelector("#imitation")
  };

  refs.buttonToSimulateClick.addEventListener('click', toggleModal);

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