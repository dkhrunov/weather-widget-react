import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
