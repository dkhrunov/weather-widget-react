import React from 'react';
import { findWeatherIcon } from '../Global';
import { withForecast } from '../../context/WeatherStorage';
import { Ripple } from 'react-spinners-css';
import './weather.css';

const Weather = withForecast(({ forecast, isLoading }) => (
	isLoading ?
		<div className="spinner-wrapper"><Ripple color="#fff" className="spinner"/></div>
	:
		<div className="weather">
			<span className="weather__icon">{ forecast ? findWeatherIcon(forecast.data[0].weather.code) : null }</span>
			<h1 className="weather__current">
				<p className="weather__day">{ forecast ? forecast.data[0].weather.description : null }</p>
				{ forecast ? Math.round(forecast.data[0].temp) : null }<sup>o</sup><br/>
			</h1>
		</div>
));

export default Weather;