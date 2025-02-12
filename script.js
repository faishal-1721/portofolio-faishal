document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan efek fade-in saat halaman dimuat
    document.body.classList.add("fade-in");

    // Tangani efek fade-out hanya jika pengguna mengklik tombol dengan class "btn"
    const links = document.querySelectorAll(".btn");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah halaman langsung berubah
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Waktu animasi fade-out (0.5 detik)
        });
    });

    // Cegah halaman menjadi putih saat kembali dengan tombol Back
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            document.body.classList.remove("fade-out");
        }
    });
});
