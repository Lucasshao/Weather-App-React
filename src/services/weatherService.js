const API_KEY = '70d5474afcca498fa43232536221710';
// const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Beijing&aqi=no`
const FETCH_CITY_WEATHER_URL = 'http://api.weatherapi.com/v1/current.json'

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL)

  url.searchParams.append('key', API_KEY)//通过自身的方法，可以把key value直接装里面，实现非常容易的参数化
  url.searchParams.append('q', city)
  url.searchParams.append('api', 'false')

  const response = await fetch(url);
  // console.log(response.json()); //因为拿到的payroll也是一个promise，需要再做一次await。所以从后台那数据时候，起码需要两个promise，一个拿到response，一个拿到response里面的payroll。
  const data = await response.json()
  // console.log(data);
  return data
}