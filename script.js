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

        var lampImage = document.createElement('img');
        lampImage.src = 'img/lampu2.png'; // Set the path to your image

        lampImage.style.width = '150%'; // Make it full width
        lampImage.style.position = 'fixed'; // Position it absolutely
        lampImage.style.top = 0; // Position it at the top
        lampImage.style.opacity = 0; // Set initial opacity to 0
        
        // Tambahkan elemen img ke body
        document.body.appendChild(lampImage);

        // Trigger reflow and then add the class to start the fade-in animation
        lampImage.offsetWidth; // Reflow
        lampImage.style.opacity = 1; // Set opacity to 1 to start the fade-in effect
        lampImage.classList.add('fade-out'); // Add a class for further styling if needed
    }, 100); // Change the delay to adjust the timin

        // Periksa apakah body memiliki kelas "lampu-on"
        setTimeout(function () {
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
        }, 3000);
}

function playMusic() {
    var musicButton = document.querySelector('.musik');
    var eventButton = document.querySelector('.acara');

    // Ambil elemen audio
    audio.src = 'audio/Y2meta.app - Saat bahagia sped up + reverb (128 kbps).mp3';

    // Mainkan musik
    audio.play();

    // Sembunyikan tombol "Mainkan musik"
    musicButton.style.display = 'none';

    // Tampilkan tombol "Ke acara inti"
    eventButton.style.display = 'inline-block';
}

function startMainEvent() {
    // Mengubah kelas elemen untuk memunculkan container
    var containerElement = document.querySelector('.container.center');
    containerElement.classList.remove('hidden');
  }
