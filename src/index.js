function displayLaTimezone() {
let losAngelesDateDataElement = document.querySelector("#los-Angeles-Date-Data");
let losAngelesTimeDataElement = document.querySelector("#los-Angeles-Time-Data");
let losAngelesTimeElement = moment();

losAngelesDateDataElement.innerHTML = (losAngelesTimeElement.tz(`America_Los_Angeles`).format(`MMMM Do YYYY`));
losAngelesTimeDataElement.innerHTML = (losAngelesTimeElement.tz(`America_Los_Angeles`).format(`h:mm:ss A`));
}

displayLaTimezone();
setInterval(displayLaTimezone);



function displaySydneyTimezone() {

let SydneyDateDataElement = document.querySelector("#sydney-Date-Data");
let SydneyTimeDataElement = document.querySelector("#sydney-Time-Data");

let sydneyTimeElement = moment();

SydneyDateDataElement.innerHTML  = (sydneyTimeElement.tz(`Australia/Sydney`).format('MMMM Do YYYY'));
SydneyTimeDataElement.innerHTML = (sydneyTimeElement.tz(`Australia/Sydney`).format('h:mm:ss A'))

}
displaySydneyTimezone(); 
setInterval(displaySydneyTimezone);



function displayTokyoTimezone() {
let tokyoDateDataElement = document.querySelector("#tokyo-Date-Data");
let tokyoTimeDataElement = document.querySelector("#tokyo-Time-Data");

let tokyoTimeElement = moment();

 tokyoDateDataElement.innerHTML  = (tokyoTimeElement.tz(`Asia/Tokyo`).format('MMMM Do YYYY'));
 tokyoTimeDataElement.innerHTML = (tokyoTimeElement.tz(`Asia/Tokyo`).format('h:mm:ss A'));
};

displayTokyoTimezone();
setInterval(displayTokyoTimezone);



