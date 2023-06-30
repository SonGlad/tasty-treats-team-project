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


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (!refs.modal.classList.contains("is-hidden")) {
        toggleModal();
      }
    }
  });

  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (refs.modal.classList.contains("is-hidden")) {
      document.body.style.overflow = ""
    } else {document.body.style.overflow = "hidden"}
  }
};


export default modalOpenClose;