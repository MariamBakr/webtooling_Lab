import { inputval } from "./variables"
import { city } from "./variables"
import { descrip } from "./variables"
import { temp } from "./variables"
import { wind } from "./variables"
export function convertion(val)
{
    return (val - 273).toFixed(2)
}

export function Do()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+"3045dd712ffe6e702e3245525ac7fa38")
  .then(res => res.json())


  .then(data => 
  {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  .catch(err => alert('You entered Wrong city name'))
}
