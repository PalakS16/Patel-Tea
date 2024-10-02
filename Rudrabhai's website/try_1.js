document.querySelectorAll('.product-image').forEach((image) => {
    const originalSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover-src'); // Get the hover image URL from the attribute

    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
});
document.querySelectorAll('.product-image').forEach((image) => {
    const originalSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover-src');

    // Function to automatically change images on devices without hover
    function startImageRotation() {
        setInterval(() => {
            // Change to hover image
            image.src = hoverSrc;
            // After a few seconds, change back to original image
            setTimeout(() => {
                image.src = originalSrc;
            }, 3000); // Show hover image for 3 seconds
        }, 5000); // Every 5 seconds, start the process
    }

    // Check if the device supports hover or not using matchMedia
    const supportsHover = window.matchMedia('(hover: none)').matches;
    if (supportsHover) {
        startImageRotation(); // Start image rotation on devices without hover (e.g., phones, tablets)
    }
});

