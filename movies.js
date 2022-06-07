const alert = document.querySelector('.alert-msg');
if (localStorage.getItem('alertShowed') == null) {
    alert.style.display = 'flex';
} else {
    alert.style.display = 'none';
}
document.querySelector('.alertmsg-done').addEventListener('click', () => {
    alert.style = 'display: none';
    localStorage.setItem('alertShowed', true);
});

const dsiplayCheck = () => {
    let getAppearance = localStorage.getItem('appearance');
    if (getAppearance == 'dark') {
      dark();
    } else if (getAppearance == 'light') {
      light();
    }
  }

  const dark = () => {
      document.querySelector('.alertmsg-container').style = "border: 2px solid #000; filter: invert();";
  }
  const light = () => {
      document.querySelector('.alertmsg-container').style = "border: none; filter: invert() invert();";
  }
dsiplayCheck();