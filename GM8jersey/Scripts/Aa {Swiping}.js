var startX;
var startY;
document.body.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

var startX;
var startY;
document.body.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

document.body.addEventListener("touchend", function (event) {
  var endX = event.changedTouches[0].clientX;
  var endY = event.changedTouches[0].clientY;
  var deltaX = endX - startX;
  var deltaY = endY - startY;
  var distanceThreshold = 50;
  var verticalThreshold = 100;
  if (
    Math.abs(deltaX) > Math.abs(deltaY) &&
    Math.abs(deltaX) > distanceThreshold &&
    Math.abs(deltaY) < verticalThreshold
  ) {
    if (deltaX > 0) {
      Swipe("droite");
    } else if (deltaX < 0) {
      Swipe("gauche");
    }
  }
});

function Swipe(direction) {
  toggleFrontBack(JerseysV1);
  toggleFrontBack(JerseysV2);
  toggleFrontBack(JerseysV3);
}