import { addARating } from '../js/API_request/rating-modal';


const RatingAdd = new addARating();


function modalRating() {
  const refs = {
    closeBtnModal: document.querySelector('.btn-close-rating'),
    ratingBackdrop: document.querySelector('.rating-backdrop'),
    ratingEmailBtn: document.querySelector('.rating-email-btn'),
    starInputs: document.querySelectorAll('.star-input'),
    ratingEmailInp: document.querySelector('.rating-form-input'),
  };

  refs.closeBtnModal.addEventListener('click', () => {
    refs.ratingBackdrop.classList.add('visible');
    changeColor(0);
    enableScroll();
  });

  refs.starInputs.forEach(input => {
    input.addEventListener('click', event => {
      const star = event.target;

      const ratingValue = star.value;
      RatingAdd.setRatingValue(ratingValue);
    });
  });

  refs.ratingEmailBtn.addEventListener('click', () => {
    
    refs.ratingBackdrop.classList.add('visible');
    enableScroll();
    changeColor(0); // !!!!!!!!!!!!!!!!! при отправке на backend должы обновиться звезды, но и отправиться

    const inpValue = refs.ratingEmailInp.value.trim();
   
   
    if (inpValue === '') {
      window.alert('Please enter a valid query');
      return;
    }
    const id = refs.ratingEmailBtn.id;
    RatingAdd.setInpValue(inpValue);
    RatingAdd.setId(id);
    RatingAdd.addRating();
     refs.ratingEmailInp.value = ""
  });

  refs.ratingBackdrop.addEventListener('click', evt => {
    if (evt.target === refs.ratingBackdrop) {
      refs.ratingBackdrop.classList.add('visible');
      enableScroll();
    }
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      changeColor(0);
      refs.ratingBackdrop.classList.add('visible');
      enableScroll();
    }
  });

  const stars = document.querySelectorAll('.rating-star input[type="radio"]');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const starCount = parseInt(star.value);
        changeColor(starCount);
    });
  });
};


function changeColor(starCount) {
  const stars = document.querySelectorAll('.rating-star input[type="radio"]');
  const ratingValue = document.querySelector(".rating_value")
  for (let i = 0; i < stars.length; i += 1) {
    const starLabel = stars[i].nextElementSibling;
    const starSVG = starLabel.querySelector('.star-rating');
    if (i < starCount) {
      starSVG.classList.add('active');
    } else {
      starSVG.classList.remove('active');
    }
  }
  ratingValue.textContent = starCount.toFixed(1); 
};


// function disableScroll() {
//   document.body.classList.add('scroll-lock');
// };


function enableScroll() {
  document.body.classList.remove('scroll-lock');
};


modalRating();





const emailInput = document.querySelector('.rating-form-input');
const ratingInputs = document.querySelectorAll('.star-input');
const submitButton = document.querySelector('.rating-email-btn');

// MODAL-VALIDATION //



// Функция для проверки валидности email
function isValidEmail(email) {
  // Используем встроенную валидацию HTML5 для поля email
  return emailInput.checkValidity();
}

// Функция для проверки состояния выбора рейтинга
function isRatingSelected() {
  // Проверяем, есть ли выбранный элемент с классом 'star-input'
  return [...ratingInputs].some(input => input.checked);
}

// Функция для обновления состояния кнопки отправки
function updateSubmitButtonState() {
  // Проверяем валидность email и выбран ли рейтинг
  const isEmailValid = isValidEmail(emailInput.value);
  const isRatingValid = isRatingSelected();

  // Если оба условия выполнены, активируем кнопку отправки
  submitButton.disabled = !(isEmailValid && isRatingValid);
}

// Слушаем события изменения поля email и выбора рейтинга
emailInput.addEventListener('input', updateSubmitButtonState);
ratingInputs.forEach(input => input.addEventListener('change', updateSubmitButtonState));