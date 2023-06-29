//
// const validateInput = () => {
//  const inputElement = document.querySelector('.name-input');
//  const inputPhone = document.querySelector('.input-phone');
//  const inputEmail = document.querySelector('.email-input');
//  const inputComment = document.querySelector('.order-form-comment');
//  const form = document.querySelector('#order-form');
//
//
//  inputElement.addEventListener('input', (event) => {
//    validateField(inputElement, /^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/);
//  });
//
//  inputElement.addEventListener('blur', (event) => {
//    resetField(inputElement);
//  });
//
//  inputPhone.addEventListener('input', (event) => {
//    validateField(inputPhone, /^\d+$/);
//  });
//
//  inputPhone.addEventListener('blur', (event) => {
//    resetField(inputPhone);
//  });
//
//  inputEmail.addEventListener('input', (event) => {
//    validateField(inputEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//  });
//
//  inputEmail.addEventListener('blur', (event) => {
//    resetField(inputEmail);
//  });
//
//  form.addEventListener('submit', (event) => {
//    event.preventDefault();
//
//    const nameValue = inputElement.value.trim();
//    const phoneValue = inputPhone.value.trim();
//    const emailValue = inputEmail.value.trim();
//    const commentValue = inputComment.value.trim();
//
//    if (validateField(inputElement, /^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/) &&
//        validateField(inputPhone, /^\d+$/) &&
//        validateField(inputEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//        console.log(`https://tasty-treats-backend.p.goit.global/api/orders/add&{
//        name: ${nameValue},
//        phone: ${phoneValue},
//        email: ${emailValue},
//        comment:${commentValue},
//      }`);
//
//      resetField(inputPhone);
//      resetField(inputEmail);
//      resetField(inputElement);
//      inputElement.value = '';
//      inputPhone.value = '';
//      inputEmail.value = '';
//      inputComment.value = '';
//
//    };
//  });
//
//  function validateField(input, pattern) {
//    const value = input.value.trim();
//    const isValid = pattern.test(value);
//
//    if (isValid) {
//      input.style.border = '2px solid green';
//    } else {
//      input.style.border = '2px solid red';
//    }
//
//    return isValid;
//  }
//
//  function resetField(input) {
//    input.style.border = '1px solid var(--gray-title-w)';
//  }
// };
//
// 
// export default validateInput;

const form = document.getElementById('order-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputs = form.querySelectorAll('.input-js');
  const isEmpty = false;
  const formData = {};

  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      isEmpty = true;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
      formData[input.name] = input.value.trim();
    }
  });

  if (isEmpty) {
    alert('Please fill in all required fields.');
  } else {
    console.log(`https://tasty-treats-backend.p.goit.global/api/orders/add&{
      name: ${formData.name},
      phone: ${formData.phone},
      email: ${formData.email},
      comment: ${formData.comment}
    }`);
    form.reset(); 
  }
});



