import React, { useState, useEffect } from 'react';

import { Cards, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


const App = () => {
  const [ { confirmed, recovered, deaths, lastUpdate }, setState] = useState({});

  useEffect(() => {
    async function _fetchData() {
      const fetchedData = await fetchData();

      setState(fetchedData);
    }
    _fetchData();
  }, []);

    return (
      <div className={styles.container}>
        <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} />
        <Chart confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} />
      </div>
    )
}

export default App;