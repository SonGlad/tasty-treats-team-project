import Notiflix from 'notiflix';
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
const sendBtn = document.querySelector(".submit-btn");
const form = document.getElementById('order-form');
const inputs = form.querySelectorAll('.input-js');

// Функция для проверки валидности поля
function validateField(input) {
  const value = input.value.trim();
  const pattern = new RegExp(input.pattern); 
  const isValid = pattern.test(value);

  if (isValid) {
    input.classList.remove('error');
  } else {
    input.classList.add('error');
  }

  return isValid;
}

// Обработчики событий для каждого поля
inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    validateField(input);
    checkFormValidity();
  });
});

// Функция для проверки валидности всей формы и обновления состояния кнопки
function checkFormValidity() {
  const isValidForm = Array.from(inputs).every(function (input) {
    return input.checkValidity();
  });

  sendBtn.disabled = !isValidForm;
}

// Обработчик события отправки формы
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Проверка валидности формы перед отправкой
  if (form.checkValidity()) {
    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      comment: form.comment.value.trim()
    };

    console.log('Form data:', formData);
    Notiflix.Report.success("Your order has successfully been sent,Thank you!")
    form.reset();
  } else {
    Notiflix.Report.failure('Please enter valid data.');
  }
});