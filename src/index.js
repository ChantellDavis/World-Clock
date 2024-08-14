function displayTimezone() {
let losAngelesDateDataElement = document.querySelector("#los-Angeles-Date-Data");
let losAngelesTimeDataElement = document.querySelector("#los-Angeles-Time-Data");
let TimeElement = moment();

losAngelesDateDataElement.innerHTML = (TimeElement.tz(`America_Los_Angeles`).format(`MMMM Do YYYY`));
losAngelesTimeDataElement.innerHTML = (TimeElement.tz(`America_Los_Angeles`).format(`h:mm:ss [<small>]A[</small>]`));

let SydneyDateDataElement = document.querySelector("#sydney-Date-Data");
let SydneyTimeDataElement = document.querySelector("#sydney-Time-Data");



SydneyDateDataElement.innerHTML  = (TimeElement.tz(`Australia/Sydney`).format('MMMM Do YYYY'));
SydneyTimeDataElement.innerHTML = (TimeElement.tz(`Australia/Sydney`).format('h:mm:ss [<small>]A[</small>]'))

let tokyoDateDataElement = document.querySelector("#tokyo-Date-Data");
let tokyoTimeDataElement = document.querySelector("#tokyo-Time-Data");



 tokyoDateDataElement.innerHTML  = (TimeElement.tz(`Asia/Tokyo`).format('MMMM Do YYYY'));
 tokyoTimeDataElement.innerHTML = (TimeElement.tz(`Asia/Tokyo`).format('h:mm:ss [<small>]A[</small>]'));

}

displayTimezone();
setInterval(displayTimezone);









