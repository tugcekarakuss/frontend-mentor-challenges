const shareBtn = document.getElementById('shareBtn');
const shareMenu = document.getElementById('shareMenu');

shareBtn.addEventListener('click', () => {
    shareMenu.classList.toggle('hidden');
    shareBtn.classList.toggle('active');
});