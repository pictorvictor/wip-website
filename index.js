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
  if (22.5 < angle && angle < 337.5) {
    return Math.round(angle / 45);
  } else return 0;
}
let actualLastZ = [8,8,8,8,8,8,8,8];
let lastZ = [8,8,8,8,8,8,8,8];
let z = [8,8,8,8,8,8,8,8];
// let i = 0;
function miscaFete() {
  for (let i = 0; i < arrOfCenters.length; i++) {
  let imgs = document.querySelectorAll(`.grid-item:nth-of-type(${i + 1}) img`);
  let angleBetweenMouseAndCenter = findAngle(
    arrOfCenters[i].centerX,
    arrOfCenters[i].centerY,
    pointerX,
    pointerY
  );
  let x = Math.floor(i / 4);
  let y = i % 4;
  z[i] = segmentCheck(angleBetweenMouseAndCenter);
  if (`${x}${y}` == currContainer) {
    z[i] = 8;
  }
  if (lastZ[i] != z[i]) {

    imgs[lastZ[i]].classList.remove("show");
    imgs[z[i]].classList.add("show");
    actualLastZ[i] = lastZ[i];
  }
  lastZ[i] = z[i];
  }
}
let pointerX = -1;
let pointerY = -1;
const imgContainers = document.querySelectorAll(".grid-item");
let currContainer;
const arrOfCenters = [];
let regex = "./imgs/([0-9]{3})";
let aux;
for (let imgContainer of imgContainers) {
  arrOfCenters.push(findCenterOf(imgContainer));
  imgContainer.addEventListener("mouseenter", (e) => {
    const match = e.target.children[0].currentSrc.match(regex);
    currContainer = match[1].slice(0, 2); //luam primele 2 cifre din poza, care ne dau randul si coloana
  });
  imgContainer.addEventListener("mouseleave", () => {
    currContainer = -1;
  });
}
document.onmousemove = function (event) {
  pointerX = event.pageX;
  pointerY = event.pageY;
  miscaFete();
};
