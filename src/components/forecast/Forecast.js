import React from 'react';
import { findWeatherIcon, getWeekDay, } from '../Global';
import { withForecast } from '../../context/ForecastContext';
import './forecast.css';

function makeForecastList(forecast, offsetDay, countDay, side) {
	let forecastList = [];

	for (let i = offsetDay; i <= countDay; i++) {
		let day = forecast ? getWeekDay(forecast.data[i].datetime) : null;
		let icon = forecast ? findWeatherIcon(forecast.data[i].weather.code) : null;
		let tempMax = forecast ? Math.round(forecast.data[i].max_temp) : null;
		let tempMin = forecast ? Math.round(forecast.data[i].min_temp) : null;

		let element = 
			<li className="forecast__item" key={ side + i }>
				<div className="forecast__day">{ i !== offsetDay ? day : "Today" }</div>
				<div className="forecast__temprature">
				<span className="forecast__icon">{ icon } </span>
				<span className="forecast__temprature-max">{ tempMax }</span>
				<span className="forecast__temprature-min">{ tempMin }</span>
				</div>
			</li>;

		forecastList.push(element);
	}

	return forecastList;
}

const Forecast = withForecast(({ forecast, offsetDay, countDay, side }) => (
	<ul className="forecast">
		{ makeForecastList(forecast, offsetDay, countDay, side) }
	</ul>
));

export default Forecast;