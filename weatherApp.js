const weatherform = document.querySelector(".weatherform");

const cityinput = document.querySelector(".cityinput");

const card = document.querySelector(".card");

const apikey = "a59067d09db979f7e9cf8c6e7677bc37"


weatherform.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityinput.value;
    if(city){
        try{
            const weatherdata = await getweatherData(city);
            displayweatherInfo(weatherdata);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
        

    }
    else{
        displayError("please enter a city??");
        
    }
});

async function getweatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    
    const response = await fetch(apiurl);
    console.log(response);

    if(!response.ok){
        throw new Error(`could not fetch data`);
    }
    return await response.json();

};

function displayweatherInfo(data){
    console.log(data);
    const{name:city,
        main:{temp, humidity},
        weather:[{description, id}]} = data;

        card.textContent = "";
        card.style.display = "flex";

        const citydisplay = document.createElement("h1");
        const tempdisplay = document.createElement("p");
        const humiditydisplay = document.createElement("p");
        const descdisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        citydisplay.textContent = city;
        // tempdisplay.textContent = `${temp}deg k`
        // tempdisplay.textContent = `${(temp - 273.15).toFixed(2)}deg C `
        tempdisplay.textContent = `${((temp - 273.15)* (9/5) + 32).toFixed(1)}°F`//℉ `;
        humiditydisplay.textContent = `Humidity:${humidity}%`;
        descdisplay.textContent = description;
        weatherEmoji.textContent = getweatherEmoji(id);


        citydisplay.classList.add("CityDisplay");
        tempdisplay.classList.add("TempDisplay");
        humiditydisplay.classList.add("HumidityDisplay");
        descdisplay.classList.add("Descdisplay");
        weatherEmoji.classList.add("WeatherEmoji");
 

        card.append(citydisplay);
        card.appendChild(tempdisplay);
        card.append(humiditydisplay);
        card.append(descdisplay);
        card.appendChild(weatherEmoji);

};

function getweatherEmoji(weatherId){

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
        return `⛈️ (thunderstorm)`;

        case(weatherId >=300 && weatherId < 400):
        return `🌦️ `;//(drizzle)`;

        case(weatherId >=500 && weatherId <600):
        return `🌧️`// (heavyrain)`;

        case(weatherId >=600 && weatherId <700):
        return `❄️🌨️ `//(snow)`;

        case (weatherId >= 700 && weatherId < 800):
            return "🌫️(fog)";

        case(weatherId === 800):
        return `☀️ `//(clear sky)`

        case (weatherId >= 801 && weatherId < 810):
            return "☁️ "//(clouds)";

        default:
            return "❓❔";

    }
};
function displayError(message){
    const errordisplay = document.createElement("p");
    errordisplay . textContent = message;
    // errordisplay.classList.add("ErrorDisplay");

    card.textContent = "";  
    // card.style.display = "flex";
    card.style.display = "flex";
    card.appendChild(errordisplay);


};

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);