//http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=ae91cd2f4a87fdc17ec2fc8a52930a06
//API: ae91cd2f4a87fdc17ec2fc8a52930a06
//https://coursehunters.net/course/udemy-modern-reactandredux

// must be like this:
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

import axios from 'axios';

const API_KEY='ae91cd2f4a87fdc17ec2fc8a52930a06';

const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
//const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';


export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},us`;
	
	const request=axios.get(url);  //it returns a promise 
	//console.log('Request:',request);
	
	return{
		type:FETCH_WEATHER,
		payload:request   //promise as a payload
	};
}

