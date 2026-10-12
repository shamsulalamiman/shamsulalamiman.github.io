// Mobile menu: the menu button opens and closes the navigation list.
const button = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');

function setMenu(isOpen) {
  button.setAttribute('aria-expanded', isOpen);   // tells screen readers if it is open
  nav.classList.toggle('open', isOpen);           // CSS shows the list when "open" is set
}

button.addEventListener('click', () => {
  setMenu(button.getAttribute('aria-expanded') !== 'true');
});

// Escape closes the menu
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
