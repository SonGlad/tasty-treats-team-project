
const bodyTheme = document.body;
const desktopThemeSwitcher = document.querySelector('.header-switch input');
const mobThemeSwitcher = document.querySelector('.switch input');
const desktopHeader = document.querySelector('.header');
const desktopLogoSecond = document.querySelector('.logo-second');
const allCategoryButton = document.querySelector('.all-category-button');




function toggleDesktopTheme() {
  if (desktopThemeSwitcher.checked) {

    desktopHeader.classList.add('dark-theme');

    mobThemeSwitcher.classList.add('dark-theme');
    bodyTheme.classList.add('dark-theme');
    allCategoryButton.classList.add('dark-theme');
  } else {
  
    desktopHeader.classList.remove('dark-theme');
    mobThemeSwitcher.classList.remove('dark-theme');
    bodyTheme.classList.remove('dark-theme');
    allCategoryButton.classList.remove('dark-theme');
  }
}

function toggleMobileTheme() {
  if (mobThemeSwitcher.checked) {
    bodyTheme.classList.add('dark-theme');
    allCategoryButton.classList.add('dark-theme');
  } else {
    bodyTheme.classList.remove('dark-theme');
    allCategoryButton.classList.remove('dark-theme');
  }
}
    bodyTheme.classList.add('dark-theme');
  } else {
    desktopHeader.classList.remove('dark-theme');
    bodyTheme.classList.remove('dark-theme');
  }
}




desktopThemeSwitcher.addEventListener('change', toggleDesktopTheme);



mobThemeSwitcher.addEventListener('change', toggleMobileTheme);


toggleDesktopTheme();
toggleMobileTheme();




toggleDesktopTheme();


