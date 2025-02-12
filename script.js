document.addEventListener("DOMContentLoaded", function () {
    // Menambahkan efek fade-in saat halaman dimuat
    document.body.classList.add("fade-in");

    // Menambahkan efek fade-out sebelum pindah halaman
    const links = document.querySelectorAll(".btn");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah langsung berpindah halaman
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Tunggu animasi fade-out selesai (0.5 detik)
        });
    });
});
