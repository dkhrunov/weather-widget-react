import React, { Component } from 'react';
import Front from './components/double-sided-card/front/Front';
import Back from './components/double-sided-card/back/Back';
import './components/double-sided-card/header-card.css';
import './WeatherApp.css';

const PATH_BASE = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Penza&country=RU&days=7&key=773a22d1de854e4cb602edb4aa0fdbb4';

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

class WeatherApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			forecast: null,
			activePage: 'front', 
		};

		this.fetchWeather = this.fetchWeather.bind(this);
		this.isActivePage = this.isActivePage.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.findWeatherIcon = this.findWeatherIcon.bind(this);
		this.getWeekDay = this.getWeekDay.bind(this);
	}

	findWeatherIcon = (code) => weather[code] ? weather[code] : console.log("Not founded!");

	isActivePage = (value) => ((value===this.state.activePage) ? ' double-sided-card_active-side' : '');

	onChangePage = (page) => this.setState({ activePage: page })

	getWeekDay = (fulldate) => {
		let date = new Date(fulldate);
		let weekDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return weekDaysName[date.getDay()];
	}

	fetchWeather() {
		fetch(PATH_BASE)
			.then(response => response.json())
			.then(result => this.setState({ forecast: result }))
			.catch(error => error);
	}

	componentDidMount() {
		this.fetchWeather();
	}

	render() {
		const { forecast } = this.state;

		return (
			<div className="double-sided-card">
				<Front 
					forecast={ forecast } 
					findWeatherIcon={ this.findWeatherIcon } 
					getWeekDay={ this.getWeekDay }
					isActivePage={ this.isActivePage }
					onChangePage ={ this.onChangePage }
				/>
				<Back 
					forecast={ forecast }
					findWeatherIcon={ this.findWeatherIcon } 
					getWeekDay={ this.getWeekDay }
					isActivePage={ this.isActivePage }
					onChangePage ={ this.onChangePage }
				/>
			</div>
		);
	}
}

export default WeatherApp;
