const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7a25c17a5msh04a8e886200cd48p17cd76jsn334a59fdf7fe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
			
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "jhansi", options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

			temp10.innerHTML = response.temp
			feels_like10.innerHTML = response.feels_like
			humidity10.innerHTML = response.humidity
			min_temp10.innerHTML = response.min_temp
			max_temp10.innerHTML = response.max_temp
			wind_speed10.innerHTML = response.wind_speed
			wind_degrees10.innerHTML = response.wind_degrees
			sunrise10.innerHTML = response.sunrise
			sunset10.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "nagpur", options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
			temp11.innerHTML = response.temp
			feels_like11.innerHTML = response.feels_like
			humidity11.innerHTML = response.humidity
			min_temp11.innerHTML = response.min_temp
			max_temp11.innerHTML = response.max_temp
			wind_speed11.innerHTML = response.wind_speed
			wind_degrees11.innerHTML = response.wind_degrees
			sunrise11.innerHTML = response.sunrise
			sunset11.innerHTML = response.sunset
	})


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "agra", options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
			temp12.innerHTML = response.temp
			feels_like12.innerHTML = response.feels_like
			humidity12.innerHTML = response.humidity
			min_temp12.innerHTML = response.min_temp
			max_temp12.innerHTML = response.max_temp
			wind_speed12.innerHTML = response.wind_speed
			wind_degrees12.innerHTML = response.wind_degrees
			sunrise12.innerHTML = response.sunrise
			sunset12.innerHTML = response.sunset
	})


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "kolkata", options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
			temp13.innerHTML = response.temp
			feels_like13.innerHTML = response.feels_like
			humidity13.innerHTML = response.humidity
			min_temp13.innerHTML = response.min_temp
			max_temp13.innerHTML = response.max_temp
			wind_speed13.innerHTML = response.wind_speed
			wind_degrees13.innerHTML = response.wind_degrees
			sunrise13.innerHTML = response.sunrise
			sunset13.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}




submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)
})


getweather("delhi")