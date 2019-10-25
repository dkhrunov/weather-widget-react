import React from 'react';
import { withSearchData } from '../../context/WeatherStorage';
import './search.css';

const Search = withSearchData(
	({ region, onChange, onSubmit, children }) => (
		<div className="search-weather">
			<form onSubmit={ onSubmit }>
				<input 
					className="region"
					type="text"
					value={ region }
					onChange={ onChange }
				/>
			</form>
			{children}
		</div>
	)
);

export default Search;