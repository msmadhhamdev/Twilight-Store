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
