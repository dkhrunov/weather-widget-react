import React, { Component } from 'react';
import * as config from '../../config';
import Front from '../double-sided-card/front/Front';
import Back from '../double-sided-card/back/Back';
import WeatherStorage from '../../context/WeatherStorage';
import '../double-sided-card/header-card.css';
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

	// Если видимая часть то возвращает класс для блока
	isActivePage = (value) => ((value === this.state.activePage) ? ' double-sided-card_active-side' : '');

	// Изменение видимой части компонента
	onChangePage = (page) => this.setState({ activePage: page });

	// Получение данных по API
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

	// Метод жизненого цикла компонента
	componentDidMount() {
		this.fetchWeather();
	}

	render() {

		const { 
			region, 
			isLoading, 
			isError,
			forecast,
		} = this.state;

		const store = {
			forecast,
			region,
			isLoading,
			onSearchChange: this.onSearchChange,
			onSearchSubmit: this.onSearchSubmit,
		}

		return (
			!isError ? 
				<div className="double-sided-card">
					<WeatherStorage store={ store }>
						<Front
							isActivePage={ this.isActivePage }
							onChangePage ={ this.onChangePage }
							isLoading={ isLoading }
						/>
						<Back 
							isActivePage={ this.isActivePage }
							onChangePage ={ this.onChangePage }
						/>
					</WeatherStorage>
				</div>
			: <div className="Error">
					<h1>Something went wrong!</h1>
					<h4 style={{ color: '#2196f3' }}>Refresh page and try again.</h4>
			  </div>
		);
	}
}

export default WeatherApp;