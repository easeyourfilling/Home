// Dropdowns show on hover
document.querySelectorAll('.mega-dropdown').forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    const menu = drop.querySelector('.mega-menu');
    menu.classList.add('show');
  });
  drop.addEventListener('mouseleave', () => {
    const menu = drop.querySelector('.mega-menu');
    menu.classList.remove('show');
  });
});
