import React, { useState } from 'react';
import "./WeatherApp.css";
import searchIcon from '../Assets/search.png';
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp = () => {
  let api_key="8318aab7993259caca46159928e7f722";

  const [wi_icon,setWiIcon]= useState(cloud_icon);

  const search = async () =>{
    const element=document.getElementsByClassName("cityInput")
    if(element[0].value===""){
      return element[0].value="" ;
    }
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      var humidity = document.getElementsByClassName("humidity-percent")
      var wind = document.getElementsByClassName("wind-rate")
      var temperature = document.getElementsByClassName("weather-temp")
      var location = document.getElementsByClassName("weather-location")
  
      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = data.wind.speed+" km/h";
      temperature[0].innerHTML = data.main.temp+"°c";
      location[0].innerHTML = data.name;
      

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
        setWiIcon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
          {
            setWiIcon(cloud_icon);
         }
         else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
          {
            setWiIcon(cloud_icon);
         }
         else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
          {
            setWiIcon(cloud_icon);
         }
         else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
          {
            setWiIcon(drizzle_icon);
         }
         else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
          {
            setWiIcon(rain_icon);
         }
         else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
          {
            setWiIcon(snow_icon);
         }
         else
          {
            setWiIcon(clear_icon);
         }
         

        return element[0].value="";
      
    }
    catch{
     
      
      humidity[0].innerHTML = "0 %";
      wind[0].innerHTML = "0 km/h";
      temperature[0].innerHTML = "0°c";
      location[0].innerHTML = "city not found";
      element[0].value="";

     
    }
    
  }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='search'/>
            <div className='search-icon' onClick={()=>{search()}}>
            <img src={searchIcon} alt=''/>
            </div>
        </div>
        <div className='weather-image'>
          <img src={wi_icon} alt='' className='cloud'/>
        </div>
        <div className='weather-temp'>24°c</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity_icon}alt='' className='humidity-icon'/>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>humidity</div>
          </div>
        </div>
        <div className='element'>
            <img src={wind_icon} alt='' className='wind-icon'/>
            <div className='data'>
              <div className='wind-rate'>18km/h</div>
              <div className='text'>wind speed</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp;