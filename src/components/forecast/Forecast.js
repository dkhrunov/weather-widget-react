import React from 'react';
import './forecast.css';

class Forecast extends React.Component {

	renderForecastList = () => {
		let list = [];

		for (let i = this.props.offsetDay; i <= this.props.countDay; i++) {
			let element = 
								<li className="forecast__item" key={ this.props.side + i }>
									<div className="forecast__day">{ this.props.getWeekDay(this.props.forecast.data[i].datetime) }</div>
										<div className="forecast__temprature">
										<span className="forecast__icon">{ this.props.findWeatherIcon(this.props.forecast.data[i].weather.code) } </span>
										<span className="forecast__temprature-max">{ Math.round(this.props.forecast.data[i].max_temp) }</span><span className="forecast__temprature-min">{ Math.round(this.props.forecast.data[i].min_temp) }</span>
									</div>
								</li>;

			list.push(element);
		}
		return list;
	}
 
 
	render() {
	  return(
		 <ul className="forecast">
			{ this.renderForecastList() }
		 </ul>
	  )
	}
 
}

export default Forecast;