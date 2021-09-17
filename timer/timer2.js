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
    today = new Date()
    let t_h = today.getHours()
    let t_m = today.getMinutes()
    let t_s = today.getSeconds()
    t_d= today.getDate()
    
    let hour = 3;
    let min = 54;

    d = new Date(2021,04,13,hour, min )
    let d_h = d.getHours()
    let d_m = d.getMinutes()
    
    let date = document.querySelectorAll(".day");
    function datee() {
        date.forEach(e => {
    
            if (parseInt(e.innerHTML) == t_d) {
                day[parseInt(e.attributes.num.value) + 1].style.background = "red"
                }
        })
      print(date)
    }
    datee()



}, 1000)
