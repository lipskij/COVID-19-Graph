import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {

  const [fetchData, setFetchData] = useState([]);

  useEffect (() => {
    const fetchAPI = () => {
      setFetchData(fetchData)
    }
    
    fetchAPI();
  });

  const barChart = (
    confirmed, recovered, deaths
      ? (
        <Bar 
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data:[confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false},
            title: { display: true, text:`Current state in ${fetchData}Lithuania`},
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  )
}

export default Chart;