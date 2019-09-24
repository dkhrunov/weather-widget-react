import React from 'react';
import './weather.css';

const Weather = ({ icon, temp, description }) =>
	<div className="weather">
		<span className="weather__icon">{ icon }</span>
		<h1 className="weather__current">
			<p className="weather__day">{ description }</p>
			{ temp }<sup>o</sup><br/>
		</h1>
	</div>

export default Weather;