import React from 'react';

const weather = {
	200: <i className="wi wi-day-storm-showers"></i>,
	201: <i className="wi wi-day-storm-showers"></i>,
	202: <i className="wi wi-day-storm-showers"></i>,
	230: <i className="wi wi-day-thunderstorm"></i>,
	231: <i className="wi wi-day-thunderstorm"></i>,
	232: <i className="wi wi-day-thunderstorm"></i>,
	233: <i className="wi wi-day-thunderstorm"></i>,
	300: <i className="wi wi-day-rain-mix"></i>,
	301: <i className="wi wi-day-rain-mix"></i>,
	302: <i className="wi wi-day-rain-mix"></i>,
	500: <i className="wi wi-day-rain"></i>,
	501: <i className="wi wi-day-rain"></i>,
	502: <i className="wi wi-day-rain"></i>,
	511: <i className="wi wi-day-rain"></i>,
	520: <i className="wi wi-day-showers"></i>,
	521: <i className="wi wi-day-showers"></i>,
	522: <i className="wi wi-day-showers"></i>,
	600: <i className="wi wi-snow"></i>,
	601: <i className="wi wi-snow"></i>,
	602: <i className="wi wi-snow"></i>,
	610: <i className="wi wi-day-rain-mix"></i>,
	611: <i className="wi wi-day-sleet"></i>,
	612: <i className="wi wi-day-sleet"></i>,
	621: <i className="wi wi-day-snow"></i>,
	622: <i className="wi wi-day-snow"></i>,
	623: <i className="wi wi-day-snow-wind"></i>,
	700: <i className="wi wi-smoke"></i>,
	711: <i className="wi wi-smoke"></i>,
	721: <i className="wi wi-day-haze"></i>,
	731: <i className="wi wi-sandstorm"></i>,
	741: <i className="wi wi-fog"></i>,
	751: <i className="wi wi-fog"></i>,
	800: <i className="wi wi-day-sunny"></i>,
	801: <i className="wi wi-day-sunny-overcast"></i>,
	802: <i className="wi wi-day-sunny-overcast"></i>,
	803: <i className="wi wi-day-cloudy"></i>,
	804: <i className="wi wi-cloudy"></i>,
	900: <i className="wi wi-rain"></i>,
}

const findWeatherIcon = (code) => 
	weather[code] ? weather[code] : console.log("Not founded!");

const getWeekDay = (fulldate) => {
	let date = new Date(fulldate);
	let weekDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return weekDaysName[date.getDay()];
}

export default {
	findWeatherIcon,
	getWeekDay,
}
