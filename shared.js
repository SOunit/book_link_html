console.log('hello from js');

const sidebarButton = document.querySelector('.sidebar-button');
const backdrop = document.querySelector('.backdrop');

sidebarButton.addEventListener('click', () => {
  console.log('click');
  backdrop.classList.add('open');
});

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('open');
});
