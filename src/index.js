function displayTimezone() {
let TimeElement = moment();  
let losAngelesDateDataElement = document.querySelector("#los-Angeles-Date-Data");
let losAngelesTimeDataElement = document.querySelector("#los-Angeles-Time-Data");

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
};

function updateCityTimeDateData(event) {
    let cityTimeZone = (event.target.value);
    if (cityTimeZone === "current") {
         cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split(`/`)[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = ` <h2 class="cityLa">${cityName}</h2>
        <div class="losAngelesDateData" >
        ${cityTime.format('MMMM Do YYYY')}  
          </div>
          <div class="losAngelesTimeData">
          ${cityTime.format('h:mm:ss [<small>]A[</small>]')}
        </div>
        <div class="allCitiesLink"><a href="/">All Cities</a></div> `;
}

displayTimezone();
setInterval(displayTimezone);




let cityTimeDateElement = document.querySelector("#city");
cityTimeDateElement.addEventListener("change", updateCityTimeDateData);









