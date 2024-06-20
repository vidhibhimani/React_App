import React, { useState, useEffect } from 'react';
import "../App.css";  
import FadeLoader from 'react-spinners/FadeLoader';

function Api() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("red");

  const api = {
    key: '2b01852801be98da50df64922d45a55a',
    base: 'https://api.openweathermap.org/data/2.5/'
  };

  const find = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div>
      <div className="header">
        <h1>Weather Application</h1>
      </div>
      <div className="main">
        <input
          type="text"
          placeholder="Enter Your City Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <button className="btn btn-outline-dark" onClick={find}>
          <i>Search</i>
        </button>
      </div>
      {weather === "" ? (
        <div className="loaderr">
          <FadeLoader color={color} size={150} />
        </div>
      ) : (
        <div>
          <div className="card">
            <h2 className='cityy'>{weather.name}</h2>
            <p className='tempreture'>{weather.main.temp} C</p>

            <div className='sec1'> 
              <div className='box'> <h5 className='humidity'>Humidity</h5></div>
              <div className='box'> <h5 className='weather'>Weather</h5></div>
              </div>

              <div className='sec2'>
              <div className='box'> <p className='hum'>{weather.main.humidity}</p></div>
            
            <div className='box'> <p>{weather.weather[0].description}</p></div>
              </div>
              
             
            </div>


         
        </div>
      )}
    </div>
  );
}

export default Api;
