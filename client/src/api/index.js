import axios from 'axios';

const url = 'http://localhost:8000/blood-bank-signup';

// export const fetchData = () => axios.get(url);
export const fetchData = () => axios.fetch('http://localhost:8000/blood-bank-signup', {
  mode: 'cors',
  credentials: 'include'
})
export const createData = (newData) => axios.post(url, newData);