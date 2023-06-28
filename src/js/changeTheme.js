// Получаем переключатель темы для десктопной версии
const bodyTheme = document.body;
const desktopThemeSwitcher = document.querySelector('.header-switch input');
const mobThemeSwitcher = document.querySelector('.switch input');
const desktopHeader = document.querySelector('.header');
const desktopLogoSecond = document.querySelector('.logo-second');
const allCategoryButton = document.querySelector('.all-category-button');

// Функция для переключения темы для десктопной версии
function toggleDesktopTheme() {
  if (desktopThemeSwitcher.checked) {
    // Если выбрана темная тема
    desktopHeader.classList.add('dark-theme');
    mobThemeSwitcher.classList.add('dark-theme');
    bodyTheme.classList.add('dark-theme');

  } else {
    // Если выбрана светлая тема
    desktopHeader.classList.remove('dark-theme');
    mobThemeSwitcher.classList.remove('dark-theme');
    bodyTheme.classList.remove('dark-theme');

  }
}

// Функция для переключения темы для мобильной версии
function toggleMobileTheme() {
  if (mobThemeSwitcher.checked) {
    // Если выбрана темная тема
    bodyTheme.classList.add('dark-theme');

  } else {
    // Если выбрана светлая тема
    bodyTheme.classList.remove('dark-theme');

  }
}

// Слушаем событие изменения переключателя темы для десктопной версии
desktopThemeSwitcher.addEventListener('change', toggleDesktopTheme);

// Слушаем событие изменения переключателя темы для мобильной версии
mobThemeSwitcher.addEventListener('change', toggleMobileTheme);

// Вызываем функции toggleDesktopTheme() и toggleMobileTheme() при загрузке страницы, чтобы применить начальные темы
toggleDesktopTheme();
toggleMobileTheme();


