import { useState } from 'react';

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChanceTemp = () => setIsCelsius(!isCelsius);

  return (
    <article className="Container">
      <h1 className="Titulo1">Weather App</h1>
      <h2 className="Titulo2">
        {weather?.name}, {weather?.sys.country}{' '}
      </h2>
      <div>
        <div>
          <section className="Model">
            <img
              src={
                weather &&
                `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
              }
              alt=""
            />
            <h3>"{weather?.weather[0].description}"</h3>
            <ul className="lista">
              <li>
                <span className="element">Win Speed</span>
                <span className="Description"> {weather?.wind.speed} m/s</span>
              </li>
              <li>
                <span className="element">Clouds</span>
                <span className="Description"> {weather?.clouds.all} %</span>
              </li>
              <li>
                <span className="element">Pressure</span>
                <span className="Description">
                  {' '}
                  {weather?.main.pressure} hPa
                </span>
              </li>
            </ul>
          </section>
          <h2>
            {isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}
          </h2>
          <button onClick={handleChanceTemp}>
            {isCelsius ? 'Change to °F' : 'Change to °C'}{' '}
          </button>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;
