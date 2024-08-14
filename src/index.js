function displayLaDate() {
let losAngelesData = document.querySelector("#los-Angeles-Date-Data");
let losAngelesTimeData = moment().tz(`America_Los_Angeles`).format('MMMM Do YYYY');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displayLaDate);

function displayLaTime() {
let losAngelesData = document.querySelector("#los-Angeles-Time-Data");
let losAngelesTimeData = moment().tz(`America_Los_Angeles`).format('h:MM:ss A');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displayLaTime);


function displaySydneyDate() {
let losAngelesData = document.querySelector("#sydney-Date-Data");
let losAngelesTimeData = moment().tz(`Australia/Sydney`).format('MMMM Do YYYY');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displaySydneyDate);

function displaySydneyTime() {
let losAngelesData = document.querySelector("#sydney-Time-Data");
let losAngelesTimeData = moment().tz(`Australia/Sydney`).format('h:MM:ss A');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displaySydneyTime);

function displayTokyoDate() {
let losAngelesData = document.querySelector("#tokyo-Date-Data");
let losAngelesTimeData = moment().tz(`Asia/Tokyo`).format('MMMM Do YYYY');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displayTokyoDate);

function displayTokyoTime() {
let losAngelesData = document.querySelector("#tokyo-Time-Data");
let losAngelesTimeData = moment().tz(`Asia/Tokyo`).format('h:MM:ss A');
losAngelesData.innerHTML = losAngelesTimeData;
}


setInterval(displayTokyoTime);


