document.getElementById('activate-button').addEventListener('click', function() {
    const overlay = document.getElementById("uwu-overlay");
    const sound = document.getElementById("uwu-sound");
    
    overlay.style.display = "flex";
    sound.play();
    
    setTimeout(() => {
        overlay.style.display = "none";
    }, 3400);
});