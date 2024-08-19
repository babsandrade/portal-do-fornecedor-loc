// ** Third Party Imports
import { Line } from 'react-chartjs-2'
import { useTheme } from '@mui/material/styles'

const OverviewLineChartService = props => {
  // ** Props
  const theme = useTheme()
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
    const legendColor = theme.palette.text.secondary
    
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          color: borderColor
        }
      },
      y: {
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
            color: '#fff'
        }
      }
    },
    plugins: {
        legend: {
          align: 'end',
          position: 'top',
          labels: { color: legendColor }
        }
      }
  }

  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Abertos',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        borderColor: '#003566',
        backgroundColor: '#003566',
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: '#fff',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#003566',
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255]
      },
      {
        fill: false,
        tension: 0.5,
        label: 'Fechados',
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        borderColor: '#ffc300',
        backgroundColor: '#ffc300',
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: '#fff',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#ffc300',
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170]
      },
    ]
  }

  return (
    <>
    <Line data={data} height={263} options={options} />
    </>
  )
}

export default OverviewLineChartService
