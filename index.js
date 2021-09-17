const print = console.log;



let table = document.querySelector("table");
var d = new Date();
var thisDay = d.getDate();
var thisMonth = d.getMonth();
switch (thisMonth) {
    case 0:
        thisDayName = "Yanvar";
        break;
    case 1:
        thisDayName = "Fevral";
        break;
    case 2:
        thisDayName = "Mart";
        break;
    case 3:
        thisDayName = "Aprel";
        break;
    case 4:
        thisDayName = "May";
        break;
    case 5:
        thisDayName = "Iyun";
        break;
    case 6:
        thisDayName = "Iyul";
        break;
    case 7:
        thisDayName = "Avgust";
        break;
    case 8:
        thisDayName = "Sentabr";
        break;
    case 9:
        thisDayName = "Oktabr";
        break;
    case 10:
        thisDayName = "Noyabr";
        break;
    case 11:
        thisDayName = "Dekabr"
}
document.querySelector(".date-day").innerHTML = thisDay;
document.querySelector(".date-month").innerHTML = thisDayName;
let date = document.querySelectorAll(".day")
let ramadan_day = document.querySelectorAll(".row")



let city = document.querySelectorAll(".city");
let day = document.querySelectorAll("tr");
let sHour = document.querySelectorAll(".s-hour");
let sMinut = document.querySelectorAll(".s-minut");
let iHour = document.querySelectorAll(".i-hour");
let iMinut = document.querySelectorAll(".i-minut");

var index = 1;
var sta = 0;
var stb = 0;

function datee() {
    date.forEach(e => {

        if (parseInt(e.innerHTML) == thisDay) {
            print(day[parseInt(e.attributes.num.value) + 1].children)
           // day[parseInt(e.attributes.num.value) + 1].classList.add = "today"
            document.querySelector(".day-ramadan").innerHTML = e.attributes.num.value;
            document.querySelector(".s-hour-ramadan").innerHTML = sHour[parseInt(e.attributes.num.value) - 1].innerHTML;
            document.querySelector(".s-minut-ramadan").innerHTML = sMinut[parseInt(e.attributes.num.value) - 1].innerHTML;
            document.querySelector(".i-hour-ramadan").innerHTML = iHour[parseInt(e.attributes.num.value) - 1].innerHTML;
            document.querySelector(".i-minut-ramadan").innerHTML = iMinut[parseInt(e.attributes.num.value) - 1].innerHTML;
        }
    })
}
datee()

// Oldindan o'rnatilgan vaqtlarni o'qib olamiz
var SHOUR1 = [];
var SMINUT1 = [];
var IHOUR1 = [];
var IMINUT1 = [];
for (let i = 0; i < 30; i++) {
    SHOUR1[i] = parseInt(sHour[i].innerHTML);
    IHOUR1[i] = parseInt(iHour[i].innerHTML);
    SMINUT1[i] = parseInt(sMinut[i].innerHTML);
    IMINUT1[i] = parseInt(iMinut[i].innerHTML);
}


city.forEach(e => e.addEventListener("click", c => {

    index = parseInt(c.target.id) // Shahar nomiga bog'liq bo'lgan idni o'qib olamiz

    city.forEach(e => e.style.background = "#000")
    city[index - 1].style.background = "#4B2C04"
        // id ga mos shahar soat vaqti farqlarini kiritamiz (Vaqtlar Buxoro vaqti bo'yicha berilgan)
    switch (index) {
        case 1:
            a = 0 - sta;
            b = 0 - stb;
            break;
        case 2:
            a = 10 - sta;
            b = 5 - stb;
            break;

        case 3:
            a = 5 - sta;
            b = 1 - stb;
            break;
        case 4:
            a = 15 - sta;
            b = 3 - stb;
            break;
        case 5:
            a = 20 - sta;
            b = 5 - stb;
            break;
        case 6:
            a = 15 - sta;
            b = 8 - stb;
            break;
        case 7:
            a = 22 - sta;
            b = 12 - stb;
            break;
        case 8:
            a = 17 - sta;
            b = 11 - stb;
            break;
        case 9:
            a = 17 - sta;
            b = 14 - stb;
            break;
        case 10:
            a = 20 - sta;
            b = 15 - stb;
            break;
        case 11:
            a = 20 - sta;
            b = 23 - stb;
            break;
        case 12:
            a = 24 - sta;
            b = 18 - stb;
            break;
        case 13:
            a = 35 - sta;
            b = 39 - stb;
            break;
        case 14:
            a = 33 - sta;
            b = 42 - stb;
            break;
        case 15:
            a = -4 - sta;
            b = 1 - stb;
            break;
        case 16:
            a = -4 - sta;
            b = -8 - stb;
            break;
        case 17:
            a = -8 - sta;
            b = -10 - stb;
            break;
        case 18:
            a = -7 - sta;
            b = -10 - stb;
            break;
        case 19:
            a = -10 - sta;
            b = -13 - stb;
            break;
        case 20:
            a = -2 - sta;
            b = -4 - stb;
            break;
        case 21:
            a = -13 - sta;
            b = -15 - stb;
            break;
    }
    let ramadanCity = document.querySelectorAll(".ramadan-city")
    ramadanCity.forEach(e => {
        e.innerHTML = `${city[index - 1].innerHTML}`
    })


    let SMINUT = [];
    let IMINUT = [];
    let SHOUR = [];
    let IHOUR = []
    for (let i = 0; i < 30; i++) {
        SMINUT[i] = SMINUT1[i] + a;
        IMINUT[i] = IMINUT1[i] + b;
        SHOUR[i] = SHOUR1[i];
        IHOUR[i] = IHOUR1[i];


        if (SMINUT[i] < 0) {
            SMINUT[i] += 60;
            SHOUR[i] -= 1;
        } else if (SMINUT[i] >= 60) {
            SMINUT[i] -= 60;
            SHOUR[i] += 1;
        }

        if (IMINUT[i] < 0) {
            IMINUT[i] += 60;
            IHOUR[i] -= 1;
        } else if (IMINUT[i] > 60) {
            IMINUT[i] -= 60;
            IHOUR[i] += 1;

        }


        sHour[i].innerHTML = SHOUR[i];
        if (SMINUT[i].toString().length != 2) {
            sMinut[i].innerHTML = `0${SMINUT[i]}`;
        } else {
            sMinut[i].innerHTML = SMINUT[i]
        }

        iHour[i].innerHTML = IHOUR[i];

        if (IMINUT[i].toString().length != 2) {
            iMinut[i].innerHTML = `0${IMINUT[i]}`;
        } else {
            iMinut[i].innerHTML = IMINUT[i];
        }



    }
    datee()
    a = 0;
    b = 0;

}))


// var friday = document.querySelectorAll("td")
// friday.forEach(e => {
//     if (e.innerHTML == "Juma") {
//         e.parentElement.style.backgroundColor = "#f1b753";
//         e.parentElement.style.color = "#000"
//     }
// })





setInterval(function() {
    var thisDate = new Date()

    hour = document.querySelector(".this-hour");
    hours = thisDate.getHours()
    if (10 - hours >= 1 && 10 - hours <= 10) {
        hour.innerHTML = `0${hours}`
    } else {
        hour.innerHTML = hours
    }


    document.querySelector(".this-minut").innerHTML = thisDate.getMinutes()
    min = document.querySelector(".this-minut");
    minut = thisDate.getMinutes()
    if (10 - minut >= 1 && 10 - minut <= 10) {
        min.innerHTML = `0${minut}`
    } else {
        min.innerHTML = minut
    }


    sec = document.querySelector(".this-secund");
    secund = thisDate.getSeconds();
    if (10 - secund >= 1 && 10 - secund <= 10) {
        sec.innerHTML = `0${secund}`
    } else {
        sec.innerHTML = secund
    }
}, 1000)




