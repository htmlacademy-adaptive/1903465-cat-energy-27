const header = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-header__nav-toggle');

header.classList.remove('no-js');
navToggle.addEventListener('click', () => header.classList.toggle('is-open'));

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    header.classList.remove('is-open');
  }
}
);
