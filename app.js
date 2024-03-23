const apiKey="ab9f195c82bd1c190e38bad3465c0a7b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherImg=document.querySelector('.weather-icon');

async function Weather(city){
  const resp= await fetch(apiUrl+ city +`&appid=${apiKey}`);
  if(resp.status===404){
    document.querySelector('.errorMsg').style.display="block";
    document.querySelector('.weather').style.display="none";
  
  }
  else{
    const data=await resp.json();
    // console.log(data);
  
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
  
    if(data.weather[0].main==='Clouds'){
      weatherImg.src="clouds.png";
    }
    else if(data.weather[0].main==='Clear'){
      weatherImg.src="clear.png";
    }
    else if(data.weather[0].main==='Rain'){
      weatherImg.src="rain.png";
    }
    else if(data.weather[0].main==='Drizzle'){
      weatherImg.src="drizzle.png";
    }
    else if(data.weather[0].main==='Mist'){
      weatherImg.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".errorMsg").style.display="none";
  
  }
  }

searchBtn.addEventListener('click', ()=>{
  Weather(searchBox.value);
});

