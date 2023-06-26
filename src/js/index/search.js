
document.addEventListener('click', function(event) {
  const customSelects = document.querySelectorAll('.custom-select');
  const clickedElement = event.target;

  
  customSelects.forEach(function(select) {
    if (select !== clickedElement.closest('.custom-select')) {
      select.classList.remove('open');
    }
  });

  
  const customSelect = clickedElement.closest('.custom-select');
  if (customSelect) {
    customSelect.classList.toggle('open');
  }
});

document.addEventListener('click', function(event) {
  const option = event.target.closest('.option');
  if (option) {
    const customSelect = option.closest('.custom-select');
    const selectedOption = customSelect.querySelector('.js-for-selected span');

    selectedOption.textContent = option.textContent;
    customSelect.classList.remove('open');
  }
});
