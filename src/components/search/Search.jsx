import React from 'react';
import { useWeatherContext } from '../../context/WeatherStorage';
import './search.css';

// const Search = withSearchData(
// 	({ region, onChange, onSubmit, children }) => (
// 		<div className="search-weather">
// 			<form onSubmit={ onSubmit }>
// 				<input 
// 					className="region"
// 					type="text"
// 					value={ region }
// 					onChange={ onChange }
// 				/>
// 			</form>
// 			{children}
// 		</div>
// 	)
// );

const Search = ({ children }) => {
	const value = useWeatherContext();
	return (
		<div className="search-weather">
			<form onSubmit={ value.onSearchSubmit }>
				<input 
					className="region"
					type="text"
					value={ value.region }
					onChange={ value.onSearchChange }
				/>
			</form>
			{children}
		</div>
	)
}

export default Search;