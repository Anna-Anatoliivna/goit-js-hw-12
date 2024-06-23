import axios from 'axios';

export default async function fetchData(params) {
  try {
    const res = await axios.get('https://pixabay.com/api/?' + params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
