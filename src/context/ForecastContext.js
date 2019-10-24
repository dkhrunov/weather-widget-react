import React from 'react';

// Create forecast context
const ForecastContext = React.createContext();

// Wrapper with forecast data
export const withForecast = (Component) => (props) => (
	<ForecastContext.Consumer>
		{ (forecast) =>	<Component {...props} forecast={forecast}/> }
	</ForecastContext.Consumer>
)

export default ForecastContext;