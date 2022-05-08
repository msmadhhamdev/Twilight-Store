// onLoad Appearance Check
const appearanceCheck = () => {
    let getAppearance = localStorage.getItem('appearance');
    if (getAppearance == 'dark') {
      darkMode();
    } else if (getAppearance == 'light') {
      lightMode();
    }
}

const darkMode = () => {
    document.querySelector('header').style.filter = "invert()";
    document.querySelector('embed').classList.add('dark-item-shadow');
    document.querySelector('.movie-downloader').style.filter = "invert()";
    document.body.style.background = "#222";
}


appearanceCheck();
const appearance = () => {
  if (customizeBtn.classList.contains('fa-moon')) {
    darkMode();
  } else {
    lightMode();
  }
}