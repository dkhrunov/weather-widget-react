// Чтобы не пробрасывать пропсы (props drilling) через компоненты которым они не нужны,
// хранение всех состояний приложения сводиться в одно место, nиспользуя React Context.

import React, { useContext } from 'react';

// Создание контекста
const WeatherContext = React.createContext();

// Обертка для дочерних компонентов, использующих этот контекст, подписывается на изменения контекста.
const WeatherStorage = ({ store, children }) => {
	let storage = {
		...store
	};

	return (
		<WeatherContext.Provider value={ storage }>
			{ children }
		</WeatherContext.Provider>
	);
}

// HoC, возвращает компонент с состоянием загрузки и прогнозом погоды
export const withForecast = (Component) => (props) => (
	<WeatherContext.Consumer>
		{ 
			(storage) => 
				<Component
					{ ...props }
					isLoading={ storage.isLoading }
					forecast={ storage.forecast }
				/>
		}
	</WeatherContext.Consumer>
)

// HoC, возвращает компонент с регионом, методами изменения и отправки поля поиска
export const withSearchData = (Component) => (props) => (
	<WeatherContext.Consumer>
		{ 
			(storage) => 
				<Component
					{ ...props }
					region={ storage.region }
					onChange={ storage.onSearchChange }
					onSubmit={ storage.onSearchSubmit }
				/> 
		}
	</WeatherContext.Consumer>
)

// Использование хука контекста, который просто вовращает все хрнаимые значения в storage
export const useWeatherContext = () => useContext(WeatherContext);

// Аналогичем этому
// const useWeatherContext = () => { 
// 	const value = useContext(WeatherContext);
// 	return value;
// }

export default WeatherStorage;