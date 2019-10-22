import React from 'react';
import Global from '../Global';
import './forecast.css';

const Forecast = ({ forecast, offsetDay, countDay, side }) => {
	let forecastDays = [];

	for (let i = offsetDay; i <= countDay; i++) {
		let day = forecast ? Global.getWeekDay(forecast.data[i].datetime) : null;
		let icon = forecast ? Global.findWeatherIcon(forecast.data[i].weather.code) : null;
		let tempMax = forecast ? Math.round(forecast.data[i].max_temp) : null;
		let tempMin = forecast ? Math.round(forecast.data[i].min_temp) : null;

		let element = 
			<li className="forecast__item" key={ side + i }>
				<div className="forecast__day">{ day }</div>
				<div className="forecast__temprature">
				<span className="forecast__icon">{ icon } </span>
				<span className="forecast__temprature-max">{ tempMax }</span>
				<span className="forecast__temprature-min">{ tempMin }</span>
				</div>
			</li>;

	forecastDays.push(element);
	}

	return (
		<ul className="forecast">
			{ forecastDays }
		</ul>
	)
}

export default Forecast;