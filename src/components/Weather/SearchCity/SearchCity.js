import './SearchCity.css';
import {fetchWeatherByCity} from '../../../services/weatherService';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchCity = (props) => {

  const [city, setCity] = useState('');

  const onCityInputChange = (event) => {
    const value = event.target.value;
    setCity(value);
  }

  const onSearchButtonClick = async (event) => {
    event.preventDefault();//在React环境中使用表单都需要使用preventDefault
    props.setLoading(true);//跟后台进行交互，
    try {
      const weatherData = await fetchWeatherByCity(city);//异步操作，拿到weather 信息
      props.search(weatherData)//会set parent里面weather的信息
    } catch (error) {
      console.error('Failed to fetch city weather due to error: ', error);
    } finally {
      props.setLoading(false);
    }
  }

  return (
    <Form onSubmit={onSearchButtonClick}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search city.."
          value={city}
          onChange={onCityInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Show air quality data" className='air-quality' />
      </Form.Group>
      <Button variant="primary" type="submit">
        {/* 这里submit type会调用Form里面的onsubmit函数 */}
        Search
      </Button>
    </Form>
  );
}

export default SearchCity;