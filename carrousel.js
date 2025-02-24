const images = ['1.jpeg', '2.jpeg', '3.jpeg'];
let currentIndex = 0;

function showImage(index) {
    const imgElements = document.querySelectorAll('#carousel img');
    imgElements.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
