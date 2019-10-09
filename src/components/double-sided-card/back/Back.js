import React from'react';
import Forecast from '../../forecast/Forecast';
import './back.css';
import '../../forecast/forecast.css';

const Back = ({ forecast, findWeatherIcon, getWeekDay, isActivePage, onChangePage  }) => 
	forecast ?
		<div className={"double-sided-card__back" + isActivePage('back') }>
			<div className="header-card">
				<div className="header-card__text">7 Day Forecast</div>
				<div className="header-card__btn go-back"><i className="fa fa-chevron-circle-left" aria-hidden="true" onClick={() => onChangePage('front')}></i></div>
			</div>
			<Forecast 
				forecast={ forecast } 
				findWeatherIcon={ findWeatherIcon }
				getWeekDay={ getWeekDay }
				offsetDay={ 0 }
				countDay={ 6 }
				side ={ "back" }
			/>
		</div>
	: null

	export default Back;