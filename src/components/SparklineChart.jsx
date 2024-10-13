  import React from 'react';
  import Chart from 'react-apexcharts';

  const SparklineChart = ({ data, type }) => {
    const countVisitors = (key) => {
      return data.map((booking) => parseInt(booking[key]) || 0);
    };

    const sparklineOptions = {
      chart: {
        type: 'line',
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      tooltip: {
        enabled: false,
      },
      colors: ['#FF4560'],
      title: {  
        text: `No of ${type}`,
      },
    };

    const series = [
      {
        name: type === 'adults' ? 'Total Adults' : 'Total Children',
        data: countVisitors(type),
      },
    ];

    return (
      <div>
        <Chart options={sparklineOptions} series={series} type="line" height={200} width={400}  />
      </div>
    );
  };

export default SparklineChart;
