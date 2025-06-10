let currentScreen = 0;
const screens = document.querySelectorAll('.screen');

function nextScreen() {
  screens[currentScreen].classList.remove('active');
  currentScreen++;
  screens[currentScreen].classList.add('active');
}

function fakeConnect() {
  alert("Connected successfully.");
  nextScreen();
}
