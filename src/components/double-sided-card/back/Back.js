import React from'react';
import Forecast from '../../forecast/Forecast';
import './back.css';
import '../../forecast/forecast.css';

const Back = ({ isActivePage, onChangePage  }) => (
	<div className={"double-sided-card__back" + isActivePage('back') }>
		<div className="header-card">
			<div className="header-card__text">7 Day Forecast</div>
			<div className="header-card__btn go-back">
				<i className="fa fa-chevron-circle-left" aria-hidden="true" onClick={() => onChangePage('front')}></i>
			</div>
		</div>
		<Forecast offsetDay={ 0 } countDay={ 6 } side ={ "back" } />
	</div>
)

	export default Back;