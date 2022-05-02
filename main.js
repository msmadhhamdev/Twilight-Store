// Settings
let customizeBtn = document.querySelector('.appearance');
customizeBtn.addEventListener('click', () => {
  if (customizeBtn.classList.contains('fa-moon')) {
    customizeBtn.classList.replace('fa-moon', 'fa-sun');
    document.querySelector('header').style.filter = "invert()";
    document.querySelector('nav').style.filter = "invert()";
    document.querySelectorAll('.items').forEach(item => {
      item.style = "background: #111 !important; color: #eee !important;";
      item.classList.add('dark-item-shadow');
      document.querySelectorAll('.downloader').forEach(btn => btn.style = "filter: invert()");
      customizeBtn.setAttribute('title', 'Light Mode');
    });
    document.body.style = 'background: #222 !important';
  } else {
    customizeBtn.classList.replace('fa-sun', 'fa-moon');
    document.querySelector('header').style.filter = "invert() invert()";
    document.querySelector('nav').style.filter = "invert() invert()";
    document.querySelectorAll('.items').forEach(item => {
      item.style = "background: #fff !important; color: #000 !important;";
      item.classList.remove('dark-item-shadow');
      document.querySelectorAll('.downloader').forEach(btn => btn.style = "filter: invert() invert()");
      customizeBtn.setAttribute('title', 'Dark Mode');
    });
    document.body.style = 'background: #eee !important';
  }
});
// Hover Change
const hoverEls = document.querySelectorAll(
  '.fa-user-circle, .fa-question-circle'
);
for (let el of hoverEls) {
  el.addEventListener('mouseover', () => {
    el.classList.contains('fas')
      ? el.classList.replace('fas', 'far')
      : el.classList.replace('far', 'fas');
  });
  el.addEventListener('mouseout', () => {
    el.classList.contains('fas')
      ? el.classList.replace('fas', 'far')
      : el.classList.replace('far', 'fas');
  });
}
// About
const aboutBtn = document.querySelectorAll('.fa-user-circle');
for (let el of aboutBtn) {
  el.addEventListener('click', () => document.querySelector('.about-box').style.display = 'flex');
}
const closeBtn = document.querySelectorAll('.about-close-btn');
for (let el of closeBtn) {
  el.addEventListener('click', () => document.querySelector('.about-box').style.display = 'none');
}
// Help
const helpBtn = document.querySelectorAll('.fa-question-circle');
for (let el of helpBtn) {
  el.addEventListener('click', () => {
    let helpBox = document.querySelector('.help-box');
    if (helpBox.style.display === 'block') {
      helpBox.style.display = 'none';
    }
    else {
      helpBox.style.display = 'block';
    }
  });
}
// Help Input Validator
const textFields = document.querySelectorAll('input, textarea');
for (let el of textFields) {
  el.addEventListener('focus', () => el.parentElement.style.borderColor = 'limegreen');
  el.addEventListener('blur', () => el.parentElement.style.borderColor = '#ccc');
  el.addEventListener('invalid', () => el.parentElement.style.borderColor = '2px solid #f00');
}