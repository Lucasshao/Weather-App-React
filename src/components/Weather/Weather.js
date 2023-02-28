import './Weather.css';
import {useState} from 'react';
import WeatherResult from './WeatherResult/WeatherResult';
import SearchCity from './SearchCity/SearchCity';
import Card from 'react-bootstrap/Card';
import Spinner from '../Spinner/Spinner';

const Weather = () => {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const onSearch = (weatherData) => {
    setWeather(weatherData);
  }

  let weatherResult = 'Please submit a search...';

  if (loading) {
    weatherResult = <Spinner/>;
  } else if (weather) {
    weatherResult = <WeatherResult weather={weather}/>;
  }

  const onSetLoading = (loading) => setLoading(loading);

  return (
    <Card className="text-center weather-container">
      <Card.Header>
        <h1>JR Weather App🌤</h1>
      </Card.Header>
      <Card.Body>
        <SearchCity search={onSearch} setLoading={onSetLoading}/>
        {weatherResult}
      </Card.Body>
      <Card.Footer className="text-muted">By Lucas</Card.Footer>
    </Card>
  );
}

export default Weather;