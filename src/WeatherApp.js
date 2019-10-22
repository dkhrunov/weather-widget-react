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

class WeatherApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: 'Penza,RU',
			forecast: null,
			activePage: 'front',
			isLoading: false,
			isError: false
		};

		this.fetchWeather = this.fetchWeather.bind(this);
		this.isActivePage = this.isActivePage.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	isActivePage = (value) => ((value===this.state.activePage) ? ' double-sided-card_active-side' : '');

	onChangePage = (page) => this.setState({ activePage: page });

	fetchWeather() {
		this.setState({ isLoading: true });

		fetch(`${PATH_BASE}${PARAM_SEARCH}?${PARAM_CITY}${this.state.region}&${PARAM_DAYS}7&${PARAM_KEY}${API_KEY}`)
			.then(response => response.json())
			.then(result => this.setState({ forecast: result, isLoading: false }))
			.catch(error => this.setState({ isError: true, isLoading: false }));
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
						isActivePage={ this.isActivePage }
						onChangePage ={ this.onChangePage }
						onSearchChange={ this.onSearchChange }
						onSearchSubmit={ this.onSearchSubmit }
						isLoading={ isLoading }
					/>
					<Back 
						forecast={ forecast }
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
