var elemCount, elemLength;
var count;
var lengthEachRound = 200;

function updateCountDisplay() {
  elemCount.innerHTML = count;
  elemLength.innerHTML = "You have run: " + (lengthEachRound * count) + "m";
}

window.addEventListener('load', function() {
  count = 0;
  elemCount = document.getElementById('count');
  elemLength = document.getElementById('len');
  updateCountDisplay();
});

window.addEventListener('click', function() {
  count++;
  updateCountDisplay();
});
