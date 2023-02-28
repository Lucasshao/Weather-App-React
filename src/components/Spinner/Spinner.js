import {Spinner as BoostrapSpinner} from 'react-bootstrap';
import './Spinner.css';

function Spinner() {
  return (
    <BoostrapSpinner animation="border" role="status" className='spinner'>
      <span className="visually-hidden">Loading...</span>
    </BoostrapSpinner>
  );
}

export default Spinner;


