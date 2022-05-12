var hours = document.querySelector(".hrs");
var minutes = document.querySelector(".min");
var seconds = document.querySelector(".sec");
var am__pm = document.querySelector(".am-pm");
const btn = document.querySelector(".btn");
const wakeTime = document.getElementById("wake");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const resImg = document.querySelector(".res-img");
const msgPara = document.querySelector(".msg-para");
const sleep = document.getElementById("sleep");
const resultBox = document.querySelector(".result-box");
const resPara = document.querySelector(".result-para");

var tdy = new Date();
var currentHour = tdy.getHours();

setInterval(function () {
  var am_pm;
  let today = new Date();
  let temp = today.getHours();
  let mins = today.getMinutes().toString().padStart(2, 0);
  let secs = today.getSeconds().toString().padStart(2, 0);
  if (temp > 12) {
    var hrs = (temp - 12).toString().padStart(2, 0);
    var am_pm = "PM";
  } else {
    var am_pm = "AM";
  }
  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = secs;
  am__pm.innerHTML = am_pm;
}, 1000);

btn.addEventListener("click", function () {
  var wakeTimeValue = wakeTime.value;
  var breakfastTimeValue = breakfast.value;
  var lunchTimeValue = lunch.value;
  var dinnerTimeValue = dinner.value;
  var sleepTimeValue = sleep.value;
  var html = `
  <p class="result-para">Wake-up Time : ${wakeTime[wakeTimeValue].textContent}</p>
  <p class="result-para">Breakfast Time : ${breakfast[breakfastTimeValue].textContent}</p>
  <p class="result-para">Lunch Time : ${lunch[lunchTimeValue].textContent}</p>
  <p class="result-para">Dinner Time : ${dinner[dinnerTimeValue].textContent}</p>
  <p class="result-para">Sleep Time : ${sleep[sleepTimeValue].textContent}</p>
  `;
  if (wakeTime.value == currentHour) {
    msgPara.textContent = `Good Morning, Have A nice day!!`;
    resImg.src = "img/mrng.svg";
  } else if (breakfast.value == currentHour) {
    msgPara.textContent = `get some healthy breakfast!!!`;
    resImg.src = "img/Lunch.svg";
  } else if (lunch.value == currentHour) {
    msgPara.textContent = `get some healthy Lunch!!!`;
    resImg.src = "img/Lunch.svg";
  } else if (dinner.value == currentHour) {
    msgPara.textContent = `get some healthy dinner!!!`;
    resImg.src = "img/Lunch.svg";
  } else {
    msgPara.textContent = `get some Sleep!!!`;
    resImg.src = "img/sleep.svg";
  }
  resultBox.innerHTML = html;
});
