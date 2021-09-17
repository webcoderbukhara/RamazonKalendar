"use strict";

var print = console.log;
print("Ramazon oyi muborak bo'lsin!!!");
var i = 0;
var txt = 'amazon oyi muborak bo\'lsin ';
/* The text */

var speed = 100;
/* The speed/duration of the effect in milliseconds */
// function typeWriter() {
//     if (i < txt.length) {
//         document.querySelector(".demo").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//         if (i == txt.length) {
//             document.querySelector(".demo").innerHTML = "R"
//             i = 0
//         }
//     }
// }
// typeWriter()

var table = document.querySelector("table");
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
    thisDayName = "Dekabr";
}

document.querySelector(".date-day").innerHTML = thisDay;
document.querySelector(".date-month").innerHTML = thisDayName;
var date = document.querySelectorAll(".day");
var ramadan_day = document.querySelectorAll(".row");
var city = document.querySelectorAll(".city");
var day = document.querySelectorAll("tr");
var sHour = document.querySelectorAll(".s-hour");
var sMinut = document.querySelectorAll(".s-minut");
var iHour = document.querySelectorAll(".i-hour");
var iMinut = document.querySelectorAll(".i-minut");
var index = 1;
var sta = 0;
var stb = 0;

function datee() {
  date.forEach(function (e) {
    if (parseInt(e.innerHTML) == thisDay) {
      day[parseInt(e.attributes.num.value) + 1].style.background = "yellow";
      document.querySelector(".day-ramadan").innerHTML = e.attributes.num.value;
      document.querySelector(".s-hour-ramadan").innerHTML = sHour[parseInt(e.attributes.num.value) - 1].innerHTML;
      document.querySelector(".s-minut-ramadan").innerHTML = sMinut[parseInt(e.attributes.num.value) - 1].innerHTML;
      document.querySelector(".i-hour-ramadan").innerHTML = iHour[parseInt(e.attributes.num.value) - 1].innerHTML;
      document.querySelector(".i-minut-ramadan").innerHTML = iMinut[parseInt(e.attributes.num.value) - 1].innerHTML;
    }
  });
}

datee(); // Oldindan o'rnatilgan vaqtlarni o'qib olamiz

var SHOUR1 = [];
var SMINUT1 = [];
var IHOUR1 = [];
var IMINUT1 = [];

for (var _i = 0; _i < 30; _i++) {
  SHOUR1[_i] = parseInt(sHour[_i].innerHTML);
  IHOUR1[_i] = parseInt(iHour[_i].innerHTML);
  SMINUT1[_i] = parseInt(sMinut[_i].innerHTML);
  IMINUT1[_i] = parseInt(iMinut[_i].innerHTML);
}

city.forEach(function (e) {
  return e.addEventListener("click", function (c) {
    index = parseInt(c.target.id); // Shahar nomiga bog'liq bo'lgan idni o'qib olamiz

    city.forEach(function (e) {
      return e.style.background = "#ffffffaa";
    });
    city[index - 1].style.background = "#ff7e05c5"; // id ga mos shahar soat vaqti farqlarini kiritamiz (Vaqtlar Buxoro vaqti bo'yicha berilgan)

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

    var ramadanCity = document.querySelectorAll(".ramadan-city");
    ramadanCity.forEach(function (e) {
      e.innerHTML = "".concat(city[index - 1].innerHTML);
    });
    var SMINUT = [];
    var IMINUT = [];
    var SHOUR = [];
    var IHOUR = [];

    for (var _i2 = 0; _i2 < 30; _i2++) {
      SMINUT[_i2] = SMINUT1[_i2] + a;
      IMINUT[_i2] = IMINUT1[_i2] + b;
      SHOUR[_i2] = SHOUR1[_i2];
      IHOUR[_i2] = IHOUR1[_i2];

      if (SMINUT[_i2] < 0) {
        SMINUT[_i2] += 60;
        SHOUR[_i2] -= 1;
      } else if (SMINUT[_i2] >= 60) {
        SMINUT[_i2] -= 60;
        SHOUR[_i2] += 1;
      }

      if (IMINUT[_i2] < 0) {
        IMINUT[_i2] += 60;
        IHOUR[_i2] -= 1;
      } else if (IMINUT[_i2] > 60) {
        IMINUT[_i2] -= 60;
        IHOUR[_i2] += 1;
      }

      sHour[_i2].innerHTML = SHOUR[_i2];

      if (SMINUT[_i2].toString().length != 2) {
        sMinut[_i2].innerHTML = "0".concat(SMINUT[_i2]);
      } else {
        sMinut[_i2].innerHTML = SMINUT[_i2];
      }

      iHour[_i2].innerHTML = IHOUR[_i2];

      if (IMINUT[_i2].toString().length != 2) {
        iMinut[_i2].innerHTML = "0".concat(IMINUT[_i2]);
      } else {
        iMinut[_i2].innerHTML = IMINUT[_i2];
      }
    }

    datee();
    a = 0;
    b = 0;
  });
});
var friday = document.querySelectorAll("td");
friday.forEach(function (e) {
  if (e.innerHTML == "Juma") {
    e.style.fontSize = "larger";
    e.parentElement.style.background = "#f36411";
    e.parentElement.style.borderRadius = "15px";
  }
});
setInterval(function () {
  var thisDate = new Date();
  hour = document.querySelector(".this-hour");
  hours = thisDate.getHours();

  if (10 - hours >= 1 && 10 - hours <= 10) {
    hour.innerHTML = "0".concat(hours);
  } else {
    hour.innerHTML = hours;
  }

  document.querySelector(".this-minut").innerHTML = thisDate.getMinutes();
  min = document.querySelector(".this-minut");
  minut = thisDate.getMinutes();

  if (10 - minut >= 1 && 10 - minut <= 10) {
    min.innerHTML = "0".concat(minut);
  } else {
    min.innerHTML = minut;
  }

  sec = document.querySelector(".this-secund");
  secund = thisDate.getSeconds();

  if (10 - secund >= 1 && 10 - secund <= 10) {
    sec.innerHTML = "0".concat(secund);
  } else {
    sec.innerHTML = secund;
  }
}, 1000); // setInterval(function() {
//     let date = new Date();
//     let ifHour = 19;
//     let ifMin = 20;
//     let sahHour = 3;
//     let sahMin = 57;
//     if (ifHour >= date.getHours()) {
//         let hour = ifHour - date.getHours();
//         let min = ifMin - date.getMinutes()
//         if (min < 0) { hour--, min += 60 }
//         print(hour, min, 59 - date.getSeconds())
//     }
//     // if (ifHour <= date.getHours() && ifMin < date.getMinutes())
//     //     if (sahHour < date.getHours()) {
//     //         let hour = date.getHours() - sahHour;
//     //         let min = date.getMinutes() - sahMin;
//     //         if (min < 0) { hour--, min += 60 }
//     //     }
// }, 1000)