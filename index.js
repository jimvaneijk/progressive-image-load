function blurImageLoad() {
    const blurImageLoad = document.querySelector('.blur-image-load');
    const small = blurImageLoad.querySelector('.blur-image');

    // 1: load small image and show it
    const img = new Image();
    img.src = small.src;
    img.onload = () => {
        small.classList.add('loaded');
    };

    // 2: load large image
    const imgLarge = new Image();
    imgLarge.src = blurImageLoad.dataset.large;
    imgLarge.onload = () => {
        imgLarge.classList.add('loaded');
        imgLarge.classList.add('img-responsive');
    };
    blurImageLoad.appendChild(imgLarge);
};

module.exports = blurImageLoad;
