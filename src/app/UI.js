export class UI{
	constructor(){
		this.location=document.getElementById('weather-location')
		this.desc=document.getElementById('weather-description')
		this.string=document.getElementById('weather-string')
		this.humidity=document.getElementById('weather-humidity')
		this.wind=document.getElementById('weather-wind')
	}
	render(weather){

		this.location.textContent = weather.name + '/' + weather.sys.country
		this.desc.textContent= weather.weather[0]['description']
		this.string.textContent=weather.main.temp+'°C'
		this.humidity.textContent='humidity: ' + weather.main.humidity+'%'
		this.wind.textContent= 'wind: '+ weather.wind.speed + 'm/s'
	}
	renderImage(Data){
		const iconImage = document.getElementById('iconImage')
		iconImage.setAttribute( "src",`http://openweathermap.org/img/wn/${Data.weather[0]['icon']}@2x.png`)
	}
	renderError(){
		const container = document.getElementById("container")
		const error = document.createElement("div")
		error.innerHTML=`
			<div class="alert alert-warning alert-dismissible fade show" role="alert">
  				<strong>The fields is empty or the data is not correct</strong> Please enter the data again .
  				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
						`
		container.insertBefore(error,document.getElementById("row"))
	}
	
}