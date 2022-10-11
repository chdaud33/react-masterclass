import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IChart {
  coinId: string;
}
function Chart({ coinId }: IChart) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 5000 }
  );
  console.log(data);

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: 'Price',
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: { mode: 'dark' },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: 'transparent',
            },
            stroke: { curve: 'smooth', width: 5 },
            grid: { show: false },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['blue'], stops: [0, 100] },
            },
            colors: ['red'],
            tooltip: { y: { formatter: (value) => `$${value.toFixed(2)}` } },
            yaxis: { show: false },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
