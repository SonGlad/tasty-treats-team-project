// Получаем переключатель темы для десктопной версии
const bodyTheme = document.body;
const desktopThemeSwitcher = document.querySelector('.header-switch input');
const desktopHeader = document.querySelector('.header');
const desktopLogoSecond = document.querySelector('.logo-second');


// Функция для переключения темы для десктопной версии
function toggleDesktopTheme() {
  if (desktopThemeSwitcher.checked) {
    // Если выбрана темная тема
    desktopHeader.classList.add('dark-theme');
    bodyTheme.classList.add('dark-theme');
  } else {
    // Если выбрана светлая тема
    desktopHeader.classList.remove('dark-theme');
    bodyTheme.classList.remove('dark-theme');
  }
}



// Слушаем событие изменения переключателя темы для десктопной версии
desktopThemeSwitcher.addEventListener('change', toggleDesktopTheme);



// Вызываем функции toggleDesktopTheme() и toggleMobileTheme() при загрузке страницы, чтобы применить начальные темы
toggleDesktopTheme();

