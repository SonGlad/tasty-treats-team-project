document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.navigation a');
  

    menuItems.forEach(item => {
      item.classList.remove('current');
      item.classList.remove('nav-link-active');
    });
  

    menuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
        item.classList.add('current');
        item.classList.add('nav-link-active');
      }
    });
});
