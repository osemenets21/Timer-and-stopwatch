setInterval(() => {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  document.querySelector(".today").innerHTML = `${day}.${month}.${year}`;
});

setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let secounds = time.getSeconds();
  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (secounds < 10) secounds = "0" + secounds;
  document.querySelector(".time").innerHTML = `${hour}:${minutes}:${secounds}`;
});

// Stopwatch fields

const hourElement = document.querySelector(".hour");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const millisecondsElement = document.querySelector(".milliseconds");

// Buttons

const startBttn = document.querySelector(".start");
const loopBttn = document.querySelector(".loop");
const stopBttn = document.querySelector(".stop");
const resetBttn = document.querySelector(".reset");

// Listeners

startBttn.addEventListener("click", () => {
  startBttn.disabled = true;
  loopBttn.disabled = false;
  stopBttn.disabled = false;
  resetBttn.disabled = true;
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopBttn.addEventListener("click", () => {
  startBttn.disabled = false;
  loopBttn.disabled = true;
  stopBttn.disabled = true;
  resetBttn.disabled = false;
  clearInterval(interval);
});

loopBttn.addEventListener("click", () => {
  clearInterval(interval);
  hourTime <= 9 ? hourTime = '0' + hourTime : hourTime;
  minuteTime <= 9 ? minuteTime = '0' + minuteTime : minuteTime;
  secondTime <= 9 ? secondTime = '0' + secondTime : secondTime;
  millisecondsTime <= 9 ? millisecondsTime = '0' + millisecondsTime : millisecondsTime;
  const stopwatchArea = document.querySelector(".stopwatch_area");
  const newP = document.createElement("p");
  newP.innerText = `${hourTime}:${minuteTime}:${secondTime}:${millisecondsTime}`;
  stopwatchArea.append(newP);
  clearFields();
  interval = setInterval(startTimer, 10);
});

resetBttn.addEventListener("click", clearFields);
resetBttn.addEventListener("click", () => {
  document.querySelector(".stopwatch_area").innerHTML = "";
});

// Function Clear
function clearFields() {
  clearInterval(interval);
  hourTime = 00;
  minuteTime = 00;
  secondTime = 00;
  millisecondsTime = 00;
  hourElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
  millisecondsElement.textContent = "00";
}

// Variables

let hourTime = 00,
  minuteTime = 00,
  secondTime = 00,
  millisecondsTime = 00,
  counter = 0,
  interval;

function startTimer() {
  // milliseconds
  millisecondsTime++;
  if (millisecondsTime <= 9) {
    millisecondsElement.innerHTML = "0" + millisecondsTime;
  }
  if (millisecondsTime > 9) {
    millisecondsElement.innerHTML = millisecondsTime;
  }
  if (millisecondsTime > 99) {
    secondTime++;
    millisecondsTime = 0;
  }
  // second
  if (secondTime <= 9) {
    secondsElement.innerHTML = "0" + secondTime;
  }
  if (secondTime > 9) {
    secondsElement.innerHTML = secondTime;
  }
  if (secondTime > 59) {
    minuteTime++;
    minutesElement.innerHTML = "0" + minuteTime;
    secondTime = 0;
    secondsElement.innerHTML = "0" + secondTime;
  }
  // minute
  if (minuteTime <= 9) {
    minutesElement.innerHTML = "0" + minuteTime;
  }
  if (minuteTime > 9) {
    minutesElement.innerHTML = minuteTime;
  }
  if (minuteTime > 59) {
    hourTime++;
    minuteTime = 0;
  }
  // hour
  if (hourTime <= 9) {
    hourElement.innerHTML = "0" + hourTime;
  }
  if (hourTime > 9) {
    hourElement.innerHTML = hourTime;
  }
  if (hourTime >= 24) {
    hourTime = 0;
  }
}

// Timer block

let minuteTimer = 00,
  secondTimer = 00,
  timeTimer,
  intervalTimer;

const bttnPlus = document.querySelector(".plus");
const bttnMinus = document.querySelector(".minus");
const timerMinutes = document.querySelector(".timer_minutes");

let startTimer2 = document.querySelector(".start_timer");
let stopTimer = document.querySelector(".stop_timer");
let resetTimer = document.querySelector(".reset_timer");

let dialSecundes = document.querySelector(".dial_secundes");

bttnPlus.addEventListener("click", () => {
  minuteTimer++;
  if (minuteTimer <= 9) {
    timerMinutes.innerHTML = "0" + minuteTimer;
  }
  if (minuteTimer > 9) {
    timerMinutes.innerHTML = minuteTimer;
  }
});

bttnMinus.addEventListener("click", () => {
  if (minuteTimer > 0) {
    minuteTimer--;
    if (minuteTimer <= 9) {
      timerMinutes.innerHTML = "0" + minuteTimer;
    }
    if (minuteTimer > 9) {
      timerMinutes.innerHTML = minuteTimer;
    }
  }
});

// Button Start Timer
startTimer2.addEventListener("click", () => {
  startTimer2.disabled = true;
  stopTimer.disabled = false;
  resetTimer.disabled = true;
  timeTimer = Number(timerMinutes.textContent) * 60;
  intervalTimer = setInterval(startMyTimer, 1000);
});

// Button Stop Timer
stopTimer.addEventListener("click", () => {
  startTimer2.disabled = false;
  stopTimer.disabled = true;
  clearInterval(intervalTimer);
  resetTimer.disabled = false;
});

// Button reset Timer
resetTimer.addEventListener("click", clearTimer);


function startMyTimer() {
  let minTim = Math.floor(timeTimer / 60);
  let secTim = timeTimer % 60;

  if (minTim >= 0) {
    if (secTim <= 9) {
      secTim = "0" + secTim;
    } else {
      secTim = secTim;
    }
    if (minTim <= 9) {
      minTim = "0" + minTim;
    } else {
      minTim = minTim;
    }
    dialSecundes.innerHTML = `${minTim}:${secTim}`;
    timeTimer--;
  } else {
    clearInterval(intervalTimer);
  }
}

// Function clear Timer
function clearTimer() {
  clearInterval(intervalTimer);
  minuteTimer = 00;
  secondTimer = 00;
  dialSecundes.textContent = "00:00";
  timerMinutes.textContent = "00";
}


