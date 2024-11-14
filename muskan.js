document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const caption = document.getElementById('caption');

        modal.style.display = 'block';
        modalImage.src = this.src;
        caption.innerHTML = this.getAttribute('data-info');
    });
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
