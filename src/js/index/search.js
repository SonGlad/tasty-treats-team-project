document.addEventListener('click', function(event) {
    const customSelect = event.target.closest('.custom-select');
    if (customSelect) {
      customSelect.classList.toggle('open');
    } else {
      document.querySelectorAll('.custom-select.open').forEach(function(select) {
        select.classList.remove('open');
      });
    }
  });
  
  document.addEventListener('click', function(event) {
    const option = event.target.closest('.option');
    if (option) {
      const customSelect = option.closest('.custom-select');
      const selectedOption = customSelect.querySelector('.selected-option span');
      selectedOption.textContent = option.textContent;
      customSelect.classList.remove('open');
    }
  });