import React from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

const SevenDayForecast = ({ dailyData }) => {
  const timeLabels = dailyData.map(each => moment.unix(each.dt).format('ddd'))
  const dataSet = dailyData.map(each => each.temp.day)

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Temperature in Celcius',
        data: dataSet,
        fill: false,
        backgroundColor: 'rgba(202,37,109, .4)',
        borderColor: 'rgba(202,37,109, .8)',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <>
      <h3 className='font-bold text-gray-700'>Seven Day Forecast</h3>
      <Line data={data} options={options} />
    </>
  )
}

export default SevenDayForecast
