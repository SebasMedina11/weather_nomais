require('./index.css')
const {Weather} = require('./Weather')
const {UI}=require('./UI')
const{Store}=require('./Store')
const store = new Store()
const{city,countryCode}=store.getLocationData()
const ui = new UI()
const weather = new Weather(city,countryCode)

async function fetchWeather(){
	const data =await weather.getWeather()
	ui.render(data)
	ui.renderImage(data)
	
	cleanForm()
}
document.getElementById('w-change-btn').addEventListener('click',(e)=>{

	const city=document.getElementById('city').value
	const countryCode = document.getElementById('countryCode').value
	if(city=="" || countryCode==""){
		 ui.renderError()
	}else{
	weather.changeLocation(city,countryCode)
	store.setLocationData(city,countryCode)
	fetchWeather()
	e.preventDefault()
}
})

const cleanForm = ()=>{
	document.getElementById("city").value = ""
	document.getElementById("countryCode").value =""
}


document.addEventListener( 'DOMContentLoaded',fetchWeather)