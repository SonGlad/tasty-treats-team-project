document.addEventListener('DOMContentLoaded', function() {
  const bodyTheme = document.body;
  const desktopThemeSwitcher = document.querySelector('.header-switch input');
  const mobThemeSwitcher = document.querySelector('.switch input');
  const desktopHeader = document.querySelector('.header');


  function toggleDesktopTheme() {
    if (desktopThemeSwitcher.checked) {
      desktopHeader.classList.add('dark-theme');
      mobThemeSwitcher.classList.add('dark-theme');
      bodyTheme.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      desktopHeader.classList.remove('dark-theme');
      mobThemeSwitcher.classList.remove('dark-theme');
      bodyTheme.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  function toggleMobileTheme() {
    if (mobThemeSwitcher.checked) {
      bodyTheme.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyTheme.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  
  function applyTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      desktopThemeSwitcher.checked = true;
      mobThemeSwitcher.checked = true;
      bodyTheme.classList.add('dark-theme');
    } else {
      desktopThemeSwitcher.checked = false;
      mobThemeSwitcher.checked = false;
      bodyTheme.classList.remove('dark-theme');
    }
  };


  desktopThemeSwitcher.addEventListener('change', toggleDesktopTheme);
  mobThemeSwitcher.addEventListener('change', toggleMobileTheme);

 
  applyTheme();

 
  window.addEventListener('pageshow', function(event) {
    applyTheme();
  });
});
