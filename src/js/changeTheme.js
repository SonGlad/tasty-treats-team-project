document.addEventListener('DOMContentLoaded', function() {
  const bodyTheme = document.body;
  const desktopThemeSwitcher = document.querySelector('.header-switch input');
  const mobThemeSwitcher = document.querySelector('.switch input');
  const desktopHeader = document.querySelector('.header');
  const desktopLogoSecond = document.querySelector('.logo-second');
  const allCategoryButton = document.querySelector('.all-category-button');

  // Function to toggle the desktop theme
  function toggleDesktopTheme() {
    if (desktopThemeSwitcher.checked) {
      // Dark theme selected
      desktopHeader.classList.add('dark-theme');
      mobThemeSwitcher.classList.add('dark-theme');
      bodyTheme.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Light theme selected
      desktopHeader.classList.remove('dark-theme');
      mobThemeSwitcher.classList.remove('dark-theme');
      bodyTheme.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  // Function to toggle the mobile theme
  function toggleMobileTheme() {
    if (mobThemeSwitcher.checked) {
      // Dark theme selected
      bodyTheme.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Light theme selected
      bodyTheme.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  // Event listener for desktop theme switcher
  desktopThemeSwitcher.addEventListener('change', toggleDesktopTheme);

  // Event listener for mobile theme switcher
  mobThemeSwitcher.addEventListener('change', toggleMobileTheme);

  // Apply the stored theme on page reload
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    desktopThemeSwitcher.checked = true;
    mobThemeSwitcher.checked = true;
    toggleDesktopTheme();
    toggleMobileTheme();
  }
});