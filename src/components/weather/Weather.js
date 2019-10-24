import React from 'react';
import { findWeatherIcon } from '../Global';
import { withForecast } from '../../context/ForecastContext';
import './weather.css';

const Weather = withForecast(({ forecast }) => (
	<div className="weather">
		<span className="weather__icon">{ forecast ? findWeatherIcon(forecast.data[0].weather.code) : null }</span>
		<h1 className="weather__current">
			<p className="weather__day">{ forecast ? forecast.data[0].weather.description : null }</p>
			{ forecast ? Math.round(forecast.data[0].temp) : null }<sup>o</sup><br/>
		</h1>
	</div>
));

export default Weather;