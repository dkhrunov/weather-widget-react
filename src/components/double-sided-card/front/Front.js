import React from 'react';
import Weather from '../../weather/Weather';
import Forecast from '../../forecast/Forecast';
import './front.css';

const Front = ({ forecast, findWeatherIcon, getWeekDay, isActivePage, onChangePage }) =>
	(forecast) ?
		<div className={"double-sided-card__front" + isActivePage('front') }>
			<div className="header-card">
				<div className="header-card__text">{ forecast.city_name } <i className="fas fa-map-marker-alt"></i></div>
				<div className="header-card__btn more"><i className="fa fa-info-circle" aria-hidden="true" onClick={() => onChangePage('back')}></i></div>
			</div>

			<Weather 
				icon={ findWeatherIcon(forecast.data[0].weather.code) }
				temp={ Math.round(forecast.data[0].temp) }
				description={ forecast.data[0].weather.description }
			/>
			<Forecast 
				forecast={ forecast } 
				findWeatherIcon={ findWeatherIcon }
				getWeekDay={ getWeekDay }
				offsetDay={ 1 }
				countDay={ 3 }
				side ={ "front" }
			/>
		</div>
	: <div className="double-sided-card__front double-sided-card_active-side"></div>

export default Front;