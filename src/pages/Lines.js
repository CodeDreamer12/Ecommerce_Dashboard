import React from 'react';
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'USA', 'India'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Year',
  },
  vAxis: {
    title: 'Inflation Rate',
  },
  series: {
    1: { curveType: 'function' },
  },
}
const Lines = () => {
  return (
    <>
    <div className='chart_cont'>
    <Chart
      width={'800px'}
      height={'500px'}
      chartType="LineChart"
      loader={<span>Loading Chart</span>}
      data={LineData}
      options={LineChartOptions}
      rootProps={{ 'data-testid': '2' }}
      style={{marginTop: -250,
        float:"right",
        marginRight: 50}}
    />
  </div>
  </>
  )
}

export default Lines;