document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.navigation a');
  

    menuItems.forEach(item => {
      item.classList.remove('current');
    });
  

    menuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
        item.classList.add('current');
      }
    });
});
