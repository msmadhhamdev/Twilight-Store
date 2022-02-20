// Settings
let customizeBtn = document.querySelector('.fa-cog');
customizeBtn.addEventListener('click', () => {
    let customizeBox = document.querySelector('.settings-box');
    if(customizeBox.style.display === 'grid') {
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
let hoverEls = document.querySelectorAll('.fa-user-circle, .fa-question-circle');
for (let el of hoverEls) {
    el.addEventListener('mouseover', () => {
        el.classList.contains('fas') ? el.classList.replace('fas', 'far') : el.classList.replace('far', 'fas');
    });
    el.addEventListener('mouseout', () => {
        el.classList.contains('fas') ? el.classList.replace('fas', 'far') : el.classList.replace('far', 'fas');
    });
}