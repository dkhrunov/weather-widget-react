import React from 'react';
import './search.css';

const Search = ({ value, onChange, onSubmit, children }) =>
	<div className="search-weather">
		<form onSubmit={ onSubmit }>
		<input 
			className="region"
			type="text"
			value={ value }
			onChange={ onChange }
		/>
		<button type="submit">
			<i className="fas fa-map-marker-alt"></i>
		</button>
	</form>
	{children}
	</div>

export default Search;