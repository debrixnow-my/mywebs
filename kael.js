// Fungsi untuk mengecek apakah elemen terlihat dalam viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Fungsi untuk menjalankan animasi progress bar
function animateProgressBars() {
    const progressContainer = document.getElementById("progress-section");

    if (
        isElementInViewport(progressContainer) &&
        !progressContainer.classList.contains("animated")
    ) {
        progressContainer.classList.add("animated");

        const progressItems = document.querySelectorAll(".progress-item");
        const teamValues = [100, 86, 77]; // Nilai untuk Tim 1, Tim 2, dan Tim 3

        progressItems.forEach((item, index) => {
            // Menggunakan nilai dari array teamValues atau nilai default dari dataset
            const targetValue =
                index < teamValues.length
                    ? teamValues[index]
                    : parseInt(item.dataset.value);
            const fillElement = item.querySelector(".progress-fill");
            const valueElement = item.querySelector(".progress-value");

            // Set warna hijau untuk semua progress bar
            fillElement.style.backgroundColor = "#9e65ed"; // Warna hijau untuk semua nilai

            // Animate the progress bar
            let currentValue = 0;
            const duration = 1500; // 1.5 detik
            const interval = 20; // Update setiap 20ms
            const steps = duration / interval;
            const increment = targetValue / steps;

            const animation = setInterval(() => {
                currentValue += increment;

                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(animation);
                }

                fillElement.style.width = `${currentValue}%`;
                valueElement.textContent = `${Math.round(currentValue)}%`;
            }, interval);
        });
    }
}

// Listener untuk scroll event
document.addEventListener("scroll", animateProgressBars);

// Juga periksa ketika halaman dimuat (jika elemen sudah terlihat)
document.addEventListener("DOMContentLoaded", animateProgressBars);
// DI ATAS ANIMATION SPEED

// IN ADALAH ANIMASI NAVBAR HAMBURGER

  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");

    toggler.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
