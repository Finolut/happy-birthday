var audio = new Audio(); // Buat objek Audio

function toggleLamp() {
    var button = document.querySelector('.lampu');
    var musicButton = document.querySelector('.musik');
    var eventButton = document.querySelector('.acara');
    var body = document.body;

    // Ganti kelas pada body
    body.classList.toggle("lampu-on");

    // Ubah opasitas tombol secara animasi
    button.style.opacity = 0;

    // Setelah 1 detik, sembunyikan tombol
    setTimeout(function () {
        button.style.display = 'none';

        // Periksa apakah body memiliki kelas "lampu-on"
        if (body.classList.contains("lampu-on")) {
            // Sembunyikan tombol "Ke acara inti"
            eventButton.style.display = 'none';

            // Tampilkan tombol "Mainkan musik"
            musicButton.style.display = 'inline-block';
        } else {
            // Sembunyikan tombol "Mainkan musik" dan "Ke acara inti"
            musicButton.style.display = 'none';
            eventButton.style.display = 'none';
        }
    }, 1000);
}

function playMusic() {
    var musicButton = document.querySelector('.musik');
    var eventButton = document.querySelector('.acara');

    // Ambil elemen audio
    audio.src = 'audio/Y2meta.app - Virgoun - Surat Cinta Untuk Starla (tiktok version) (128 kbps).mp3';

    // Mainkan musik
    audio.play();

    // Sembunyikan tombol "Mainkan musik"
    musicButton.style.display = 'none';

    // Tampilkan tombol "Ke acara inti"
    eventButton.style.display = 'inline-block';
}

