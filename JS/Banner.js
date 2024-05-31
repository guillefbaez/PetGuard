let currentBannerIndex = 0;

function changeBanner(direction) {
    const banners = document.querySelectorAll('.banner, .banner-active');
    banners[currentBannerIndex].classList.remove('banner-active');
    banners[currentBannerIndex].classList.add('banner');

    if (direction === 'right') {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    } else if (direction === 'left') {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
    }

    banners[currentBannerIndex].classList.add('banner-active');
    banners[currentBannerIndex].classList.remove('banner');
}
