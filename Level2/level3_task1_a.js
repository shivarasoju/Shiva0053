const thumbnails = document.querySelectorAll('.thumbnail');

const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = thumbnail.querySelector('img').src;
    });
});


const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});