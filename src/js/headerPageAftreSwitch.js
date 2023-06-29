document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.navigation a');
    const mobMenuItems = document.querySelectorAll('.header-list-item')
  

    menuItems.forEach(item => {
      item.classList.remove('current');
      item.classList.remove('nav-link-active');
    });

    mobMenuItems.forEach(item => {
      item.classList.remove('active-header-list-item');
    });
  

    menuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
        item.classList.add('current');
        item.classList.add('nav-link-active');
      }
    });

    mobMenuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
        item.classList.add('active-header-list-item');
      }
    });
});
