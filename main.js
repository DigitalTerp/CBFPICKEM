// Toggle dropdown menus
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    closeAllDropdowns();
    this.nextElementSibling.classList.toggle('show');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', closeAllDropdowns);

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-content').forEach(menu => {
    menu.classList.remove('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
