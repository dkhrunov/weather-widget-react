import React from 'react';
import Weather from '../../weather/Weather';
import Forecast from '../../forecast/Forecast';
import Search from '../../search/Search';
import { Ripple } from 'react-spinners-css';
import './front.css';

// HOC
const withLoading = (Component) => ({ isLoading, ...other }) =>
	isLoading
		? <div className="spinner-wrapper"><Ripple color="#fff" className="spinner"/></div>
		: <Component { ...other }/>
	
const WeatherWithLoading = withLoading(Weather);

const Front = ({ region, isActivePage, onChangePage, onSearchChange, onSearchSubmit, isLoading }) => (
	<div className={"double-sided-card__front" + isActivePage('front') }>
		<div className="header-card">
			<Search
				value={ region }
				onChange={ onSearchChange }
				onSubmit={ onSearchSubmit }
			>
			</Search>
			<div className="header-card__btn more">
				<i className="fa fa-info-circle" aria-hidden="true" onClick={() => onChangePage('back')}></i>
			</div>
		</div>
		<WeatherWithLoading isLoading={ isLoading } />
		<Forecast offsetDay={ 1 } countDay={ 3 } side ={ "front" } />
	</div>
)


export default Front;