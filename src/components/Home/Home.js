import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL, API_PORT } from '../../constants/api';

import styles from './Home.module.scss';


const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(async () => await axios.get(`${API_URL}/${API_PORT}`));
  }, [])

  console.log(data)
  return (
    <main>
      <p>Continua amanhã...</p>
    </main>
  )
}

export default Home;