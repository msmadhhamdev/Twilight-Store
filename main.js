// onLoad Appearance Check
const appearanceCheck = () => {
  let getAppearance = localStorage.getItem('appearance');
  if (getAppearance == 'dark') {
    darkMode();
  } else if (getAppearance == 'light') {
    lightMode();
  }
}

// Settings
let customizeBtn = document.querySelector('.appearance');
const darkMode = () => {
  customizeBtn.classList.replace('fa-moon', 'fa-sun');
  document.querySelector('header').style.filter = "invert()";
  document.querySelector('nav').style.filter = "invert()";
  document.querySelectorAll('.items').forEach(item => {
    item.style = "background: #111 !important; color: #eee !important;";
    item.classList.add('dark-item-shadow');
  });
  document.querySelectorAll('.book').forEach(book => {
    book.style = "color: #fff; background: #111";
    book.classList.add('dark-item-shadow');
    book.childNodes[5].style = "filter: invert()";
  });
  document.querySelectorAll('.movie').forEach(movie => {
    movie.firstElementChild.style = "color: #fff";
    movie.style = "background: #111";
    movie.classList.add('dark-item-shadow');

  });
  document.querySelectorAll('.downloader').forEach(btn => btn.style = "filter: invert()");
  customizeBtn.setAttribute('title', 'Light Mode');
  document.querySelector('.about-container').style = "filter: invert()";
  document.querySelector('.about-container img').style = "filter: invert()";
  document.querySelector('.help-box').style = 'filter: invert()';
  document.querySelector('.help-box').style = 'filter: invert()';
  document.body.style = 'background: #222 !important';
  localStorage.setItem('appearance', 'dark');
}
  const lightMode = () => {
    customizeBtn.classList.replace('fa-sun', 'fa-moon');
    document.querySelector('header').style.filter = "invert() invert()";
    document.querySelector('nav').style.filter = "invert() invert()";
    document.querySelectorAll('.items').forEach(item => {
      item.style = "background: #fff !important; color: #000 !important;";
      item.classList.remove('dark-item-shadow');
    });
    document.querySelectorAll('.book').forEach(book => {
      book.style = "color: #000; background: #fff";
      book.classList.remove('dark-item-shadow');
      book.childNodes[5].style = "filter: invert() invert()";
    });
    document.querySelectorAll('.movie').forEach(movie => {
      movie.firstElementChild.style = "color: #000";
      movie.style = "background: #fff";
      movie.classList.remove('dark-item-shadow');
    });
    document.querySelectorAll('.downloader').forEach(btn => btn.style = "filter: invert() invert()");
      customizeBtn.setAttribute('title', 'Dark Mode');
      document.body.style = 'background: #eee !important';
      localStorage.setItem('appearance', 'light');
      document.querySelectorAll('.downloader').forEach(btn => btn.style = "filter: invert() invert()");
      customizeBtn.setAttribute('title', 'Dark Mode');
      document.querySelector('.about-container').style = "filter: invert() invert()";
      document.querySelector('.about-container img').style = "filter: invert() invert()";
      document.querySelector('.help-box').style = "filter: invert() invert()";
      document.querySelector('.help-box').style = "filter: invert() invert()";
      document.body.style = 'background: #eee !important';
      localStorage.setItem('appearance', 'light');
  }
  //onLoad Call
  appearanceCheck();
const appearance = () => {
  if (customizeBtn.classList.contains('fa-moon')) {
    darkMode();
  } else {
    lightMode();
  }
}

customizeBtn.addEventListener('click', appearance);

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