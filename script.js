// for hour hand 
// 12 h = 360
// 1h = 30
// n h = 30n
// 60min = 30
// 1 min = 1/2*n

// 30n+n/2 ---> 1


// for min hand
//60min = 360
// 1min = 6
// n min = 6n----->2


// for sec hand
// 60sec = 360
// n sec = 6n ------>3

let hour_hand = document.querySelector(".hour-hand")
let min_hand = document.querySelector(".min-hand")
let sec_hand = document.querySelector(".sec-hand")

let dh = document.querySelector(".dh")
let dm = document.querySelector(".dm")
let ds = document.querySelector(".ds")

setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let hrotation = 30 * h + h / 2;
    let mrotation = 6 * m;
    let srotation = 6 * s;

    hour_hand.style.transform = `rotate(${hrotation}deg)`
    min_hand.style.transform = `rotate(${mrotation}deg)`
    sec_hand.style.transform = `rotate(${srotation}deg)`


    dh.innerHTML = (h<10?'0'+h:h)>12?h-=12:h;
    dm.innerHTML = m<10?'0'+m:m;
    ds.innerHTML = s<10?'0'+s:s;
})