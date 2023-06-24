
  const modal = document.querySelector('.modal');
  const btn = document.querySelectorAll('.order-btn');
  const closeBtn = document.getElementsByClassName('close')[0];
  const form = document.getElementById('order-form');

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      modal.style.display = 'block';
      document.body.style.overflow = "hidden";
    };
  }

  closeBtn.onclick = function() {
    closeModal();
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      console.log('API_POST_Request');
    }
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = "";
  }

  function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    const namePattern = /[A-Za-zА-Яа-яЁёІіЇїЄє' ]+/;
    const phonePattern = /[0-9]{10}/;

    if (!namePattern.test(nameInput.value)) {
      alert('Enter a valid name');
      return false;
    }

    if (!phonePattern.test(phoneInput.value)) {
      alert('Enter a valid phone number');
      return false;
    }

    return true;
  }
});