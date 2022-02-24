// Settings
let customizeBtn = document.querySelector('.fa-cog');
customizeBtn.addEventListener('click', () => {
  let customizeBox = document.querySelector('.settings-box');
  if (customizeBox.style.display === 'grid') {
    customizeBox.style.display = 'none';
  } else {
    customizeBox.style.display = 'grid';
  }
});
//  Brightness set
let brightnessSelector = document.getElementById('brightness');
brightnessSelector.addEventListener('input', () => {
  document.body.style = `filter: brightness(${brightnessSelector.value}%);`;
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