const refs = {
  categoryList: document.querySelector('.category-list'),
  categoryContainer: document.querySelector('.category-container'),
  allCategoryButton: document.querySelector('.all-category-button'),
};
refs.categoryContainer.addEventListener('click', onBtnCLick);

let lastClickedBtn = null;

function onBtnCLick(event) {
  const Btn = event.target;

  if (Btn.nodeName !== 'BUTTON') {
    return;
  }

  if (lastClickedBtn) {
    lastClickedBtn.classList.remove('active');
  }

  if (Btn === refs.allCategoryButton) {
    removeActiveClassFromAllButtons();
  } else {
    refs.allCategoryButton.classList.remove('active');
  }

  Btn.classList.add('active');
  lastClickedBtn = Btn;
}

function removeActiveClassFromAllButtons() {
  const buttons = refs.categoryList.querySelectorAll('button');

  buttons.forEach(button => {
    button.classList.remove('active');
  });
}
