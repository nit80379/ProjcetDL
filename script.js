(function () {
    const INTERVAL_MS = 10000; // 6 seconds

    const imageUrls = [
        'images/C1.png',
        'images/C2.jpg'
    ];

    // Preload images for smooth transitions
    imageUrls.forEach(function (src) {
        const img = new Image();
        img.src = src;
    });

    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    if (!bg1 || !bg2 || imageUrls.length === 0) {
        return;
    }

    let currentIndex = 0;
    let nextIndex = (currentIndex + 1) % imageUrls.length;
    let isBg1Showing = true;

    // Initialize first two backgrounds
    bg1.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("' + imageUrls[currentIndex] + '")';
    bg2.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("' + imageUrls[nextIndex] + '")';

    function swapBackground() {
        const showingEl = isBg1Showing ? bg1 : bg2;
        const hiddenEl = isBg1Showing ? bg2 : bg1;

        // Advance indices
        currentIndex = nextIndex;
        nextIndex = (currentIndex + 1) % imageUrls.length;

        // Prepare next image on the hidden layer
        hiddenEl.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("' + imageUrls[nextIndex] + '")';

        // Crossfade: reveal hidden, hide showing
        hiddenEl.classList.remove('hidden');
        showingEl.classList.add('hidden');

        // Toggle which layer is showing
        isBg1Showing = !isBg1Showing;
    }

    setInterval(swapBackground, INTERVAL_MS);
})();
