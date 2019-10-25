import React from 'react';
import Weather from '../../weather/Weather';
import Forecast from '../../forecast/Forecast';
import Search from '../../search/Search';
import './front.css';

const Front = ({ isActivePage, onChangePage, isLoading }) => (
	<div className={"double-sided-card__front" + isActivePage('front') }>
		<div className="header-card">
			<Search />
			<div className="header-card__btn more">
				<i className="fa fa-chevron-circle-right" aria-hidden="true" onClick={() => onChangePage('back')}></i>
			</div>
		</div>
		<Weather />
		<Forecast offsetDay={ 1 } countDay={ 3 } side ={ "front" } />
	</div>
)


export default Front;