console.log('hello from js');

const sidebarButton = document.querySelector('.sidebar-button');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');

sidebarButton.addEventListener('click', () => {
  console.log('click');
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
});
