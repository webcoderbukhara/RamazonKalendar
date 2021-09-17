const print = console.log
let t_h = document.querySelector('.timer-hour')
let t_m = document.querySelector('.timer-minute')
let t_c = document.querySelector('.timer-secund')
let t_title = document.querySelector('.timer-title')

let s_h = 3
let s_m = 54
let i_h = 19
let i_m = 20

setInterval((e) => {
    d = new Date()

    let d_h =20// d.getHours()
    let d_m = d.getMinutes()
    let d_c = d.getSeconds()


    if ((s_h<d_h<i_h && i_h>=d_h) || (s_h==d_h && d_h>=s_h) || (d_h ==i_h && i_h>=dh)) {
        a = i_h - d_h
        b = i_m - d_m

        if (a < 0) {
            a -= 1
            b += 60
        } else if (b > 60) {
            b -= 60
            a += 1
        } else if (b < 0) {
            b += 60;
            a -= 1
        }


        t_title.innerHTML = "Iftorlikkacha qolgan<br> vaqt: "
        t_h.innerHTML = a
        t_m.innerHTML = b
        t_c.innerHTML = 60 - d_c
    } else if ((s_i<i_h<d_h)|| (i_h==d_h && d_h>i_h) || (d_h==s_h && s_h>d_h)) {
        print('Hello')
        a = s_h - d_h
        b = s_m - d_m

        if (a < 0) {
            a -= 1
            b += 60
        } else if (b > 60) {
            b -= 60
            a += 1
        } else if (b < 0) {
            b += 60;
            a -= 1
        }
        t_title.innerHTML = "Saharlikkacha qolgan<br> vaqt: "
        t_h.innerHTML = a
        t_m.innerHTML = b
        t_c.innerHTML = 60 - d_c
    }
}, 1000)