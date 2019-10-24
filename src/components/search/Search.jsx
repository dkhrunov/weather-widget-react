import React from 'react';
import './search.css';

const Search = ({ value, onChange, onSubmit, children }) => (
	<div className="search-weather">
		<form onSubmit={ onSubmit }>
		<button type="submit">
			<i className="fas fa-map-marker-alt"></i>
		</button>
		<input 
			className="region"
			type="text"
			value={ value }
			onChange={ onChange }
		/>
	</form>
	{children}
	</div>
)

export default Search;