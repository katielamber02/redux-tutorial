import React, { Component } from 'react';
//import logo from './logo.svg';

import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';


class App extends Component {
    render() {
	
        return ( 
		<div>
	       <SearchBar />
		   <WeatherList />
		</div>
        );
    }
}

export default App;