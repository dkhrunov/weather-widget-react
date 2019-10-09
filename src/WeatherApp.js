import React, { Component } from 'react';
import * as config from './config'
import Front from './components/double-sided-card/front/Front';
import Back from './components/double-sided-card/back/Back';
import './components/double-sided-card/header-card.css';
import './WeatherApp.css';

const PATH_BASE = 'https://api.weatherbit.io/v2.0';
const PARAM_SEARCH = '/forecast/daily';
const PARAM_CITY = 'city=';
const PARAM_DAYS = 'days=';
const PARAM_KEY = 'key=';

// Your API key for https://weatherbit.io
const API_KEY = config.API_KEY;

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
			region: 'Penza,RU',
			forecast: null,
			activePage: 'front',
			isLoading: false,
			isError: false,
			error: null,
		};

		this.fetchWeather = this.fetchWeather.bind(this);
		this.isActivePage = this.isActivePage.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		// this.findWeatherIcon = this.findWeatherIcon.bind(this); // dont need this binding
		// this.getWeekDay = this.getWeekDay.bind(this); // dont need this binding
	}

	findWeatherIcon = (code) => weather[code] ? weather[code] : console.log("Not founded!");

	isActivePage = (value) => ((value===this.state.activePage) ? ' double-sided-card_active-side' : '');

	onChangePage = (page) => this.setState({ activePage: page });

	fetchWeather() {
		this.setState({ isLoading: true });

		fetch(`${PATH_BASE}${PARAM_SEARCH}?${PARAM_CITY}${this.state.region}&${PARAM_DAYS}7&${PARAM_KEY}${API_KEY}`)
			.then(response => response.json())
			.then(result => this.setState({ forecast: result, isLoading: false }))
			.catch(error => this.setState({ error, isError: true, isLoading: false }));
	}
		
	// При вводе в поле input в форме search записывает занчение вводимого города
  	onSearchChange(event) {
  		this.setState({ region: event.target.value });
	}
	
	// При нажатии на кнопку выполняем новый запрос
	onSearchSubmit(event) {
		this.fetchWeather();
		// При подтверждении формы отменяем обновление страницы
		event.preventDefault();
	}

	getWeekDay = (fulldate) => {
		let date = new Date(fulldate);
		let weekDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return weekDaysName[date.getDay()];
	}

	componentDidMount() {
		this.fetchWeather();
	}

	render() {
		const { 
			region, 
			forecast, 
			isLoading, 
			isError
		} = this.state;

		return (
			!isError ? 
				<div className="double-sided-card">
					<Front 
						region={ region }
						forecast={ forecast } 
						findWeatherIcon={ this.findWeatherIcon } 
						getWeekDay={ this.getWeekDay }
						isActivePage={ this.isActivePage }
						onChangePage ={ this.onChangePage }
						onSearchChange={ this.onSearchChange }
						onSearchSubmit={ this.onSearchSubmit }
						isLoading={ isLoading }
					/>
					<Back 
						forecast={ forecast }
						findWeatherIcon={ this.findWeatherIcon } 
						getWeekDay={ this.getWeekDay }
						isActivePage={ this.isActivePage }
						onChangePage ={ this.onChangePage }
					/>
				</div>
			: <div className="Error">
					<h1>Something went wrong!</h1>
					<h4 style={{ color: '#2196f3' }}>Refresh page and try again.</h4>
			  </div>
		);
	}
}

export default WeatherApp;
