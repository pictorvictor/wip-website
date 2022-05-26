function findAngle(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let radians = Math.atan2(dy, dx);
  if (radians < 0) radians += 2 * Math.PI;
  let degrees = Math.round((radians * 180) / Math.PI);
  return degrees;
}
function findCenterOf(element) {
  const rect = element.getBoundingClientRect();
  const centerX = (rect.left + rect.right) / 2;
  const centerY = (rect.top + rect.bottom) / 2;
  const center = {};
  center.centerX = centerX;
  center.centerY = centerY;
  return center;
}
function segmentCheck(angle) {
  if (angle < 22.5) return 1;
  if (angle == 337.5) return 1;
  let k = 0;
  let aux = 400;
  let segmentMiddles = [360, 45, 90, 135, 180, 225, 270, 315];
  for (let i = 0; i < segmentMiddles.length; i++) {
    if (Math.abs(angle - segmentMiddles[i]) <= aux) {
      aux = Math.abs(angle - segmentMiddles[i]);
      k = i;
    }
  }
  return k + 1;
}
function miscaFete() {
  for (let i = 0; i < arrOfCenters.length; i++) {
    let img = document.querySelector(`.grid-item:nth-of-type(${i + 1}) img`);
    let angleBetweenMouseAndCenter = findAngle(
      arrOfCenters[i].centerX,
      arrOfCenters[i].centerY,
      pointerX,
      pointerY
    );
    let z = segmentCheck(angleBetweenMouseAndCenter);
    let x = Math.floor(i / 4);
    let y = i % 4;
    if (`${x}${y}` == currContainer) {
      img.src = `./imgs/${x}${y}9.jpg`;
    } else {
      img.src = `./imgs/${x}${y}${z}.jpg`;
    }
  }
}
let pointerX = -1;
let pointerY = -1;
const imgContainers = document.querySelectorAll(".grid-item");
let currContainer;
const arrOfCenters = [];
let intervalID;

for (let imgContainer of imgContainers) {
  arrOfCenters.push(findCenterOf(imgContainer));
  imgContainer.addEventListener("mouseenter", (e) => {
    currContainer = e.target.innerHTML.slice(41, 43);
  });
  imgContainer.addEventListener("mouseleave", () => {
    currContainer = -1;
  });
}

document.onmousemove = function (event) {
  pointerX = event.pageX;
  pointerY = event.pageY;
  miscaFete()
};
