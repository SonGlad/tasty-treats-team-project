import Notiflix from 'notiflix';


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
};

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
};


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

    console.log(`https://tasty-treats-backend.p.goit.global/api/orders/add&{
      name: ${formData.name},
      phone: ${formData.phone},
      email: ${formData.email},
      comment:${formData.comment},
    }`);
    Notiflix.Report.success("Your order has successfully been sent,Thank you!")
    form.reset();
  } else {
    Notiflix.Report.failure('Please enter valid data.');
  }
});