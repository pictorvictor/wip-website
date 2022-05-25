var pointerX = -1;
var pointerY = -1;
var ids = ['gurita','alex','victor','gheorghe',
'gurita2','alex2','victor2','gheorghe2',
'gurita3','alex3','victor3','gheorghe3',
'gurita4','alex4','victor4','gheorghe4'
]
const divs = document.querySelectorAll('div')
var ok 
var currDiv
const arr = []
let centerDAV = wrapper()
for (let div of divs) {
    i=0;
    arr.push(centerDAV(div))
        div.addEventListener('mouseenter', (e) => {
            currDiv = Number(e.target.id.slice(7)) - 1
            ok = 1;
     
        })
        div.addEventListener('mouseleave', () => {
            ok = 0;
        })
    i++
}
function wrapper() {
    let i = 0;
    function centerDiv(div) {
        const rect = div.getBoundingClientRect()
        const centerX = (rect.left + rect.right) / 2
        const centerY = (rect.top + rect.bottom) / 2
        const center = {}
        center.id = i
        i++
        center.centerX = centerX
        center.centerY = centerY
        return center
    }
    return centerDiv
}

document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
}

function angle(x1, y1, x2, y2) {
    var dx = x2 - x1
    var dy = y2 - y1
    var radians = Math.atan2(dy, dx);
    if (radians < 0) radians += 2 * Math.PI;
    var degrees = Math.round(radians * 180 / Math.PI);
    return degrees
}


setInterval(angleCheck, 1)
function angleCheck() {
    let i = 0;

    for (let center of arr) {

        let m = angle(center.centerX, center.centerY, pointerX, pointerY)
        let imgs = document.getElementsByClassName(`${ids[i]}`)
            if (ok && i==currDiv ){
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[8].style.display = 'block'
            }
            else if (m >= 22.5 && m < 67.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[3].style.display = 'block'
            } else if (m >= 67.5 && m < 112.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[4].style.display = 'block'
            }
            else if (m >= 112.5 && m < 157.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[5].style.display = 'block'
            }
            else if (m >= 157.5 && m < 202.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[6].style.display = 'block'
            }
            else if (m >= 202.5 && m < 247.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[7].style.display = 'block'
            }
            else if (m >= 247.5 && m < 292.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[0].style.display = 'block'
            }
            else if (m >= 292.5 && m < 337.5) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[1].style.display = 'block'
            }
            else if ((m <= 22.5 && m>0) || (m >= 337.5 && m<360)) {
                for (let img of imgs) {
                    img.style.display = 'none'
                }
                imgs[2].style.display = 'block'
            }
            i++;
        }
        
    }

