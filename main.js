const uwuBtn = document.getElementById("activate-button");
const trainBtn = document.getElementById("train-button");

const uwuOverlay = document.getElementById("uwu-overlay");
const trainOverlay = document.getElementById("train-overlay");

const uwuSound = document.getElementById("uwu-sound");
const trainSound = document.getElementById("train-sound");

uwuBtn.onclick = () => {
  uwuOverlay.style.display = "flex";
  uwuSound.currentTime = 0;
  uwuSound.play();

  setTimeout(() => {
    uwuOverlay.style.display = "none";
  }, 3500);
};

trainBtn.onclick = () => {
  trainOverlay.style.display = "flex";
  trainSound.currentTime = 0;
  trainSound.play();

  setTimeout(() => {
    trainOverlay.style.display = "none";
  }, 4000);
};
