const audio = document.getElementById('audio');
const playPause = document.getElementById('play-pause');
const stop = document.getElementById('stop');
const avanzar = document.getElementById('avanzar');
const retroceder = document.getElementById('retroceder');
const volumen = document.getElementById('volumen');
const progreso = document.getElementById('progreso');

// Función para reproducir/pausar
playPause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPause.textContent = 'Pausar';
    } else {
        audio.pause();
        playPause.textContent = 'Reproducir';
    }
});

// Función para detener
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPause.textContent = 'Reproducir';
});

// Función para avanzar 10s
avanzar.addEventListener('click', () => {
    audio.currentTime += 10;
});

// Función para retroceder 10s
retroceder.addEventListener('click', () => {
    audio.currentTime -= 10;
});

// Función para controlar el volumen
volumen.addEventListener('input', () => {
    audio.volume = volumen.value;
});

// Función para actualizar el progreso
audio.addEventListener('timeupdate', () => {
    progreso.value = (audio.currentTime / audio.duration) * 100;
});

// Función para actualizar el progreso al hacer clic en la barra
progreso.addEventListener('input', () => {
    audio.currentTime = (progreso.value / 100) * audio.duration;
});