// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { Bar } from 'react-chartjs-2'

const OverviewBarChartService = props => {
  // ** Props
  const theme = useTheme()
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  const options = {
    indexAxis: 'x',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 4,
          topLeft: 4
        }
      }
    },
    layout: {
      padding: { top: -4 }
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      },
      y: {
        grid: {
          display: false,
          color: borderColor
        },
        ticks: { color: labelColor }
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
        maxBarThickness: 15,
        label: `Abertas`,
        backgroundColor: '#003566',
        borderColor: 'transparent',
        data: [710, 123, 456, 125 , 405 ,456, 405, 465, 102, 486, 123, 405]
      },
      {
        maxBarThickness: 15,
        backgroundColor: '#00356629',
        label: `Fechadas`,
        borderColor: 'transparent',
        data: [430, 456, 456, 785 ,120, 405, 350, 560, 506 ,408 ,704 ,405]
      },
      

    ]
  }

  return (
    <>
        <Bar data={data} height={263} options={options} />
    </>
  )
}

export default OverviewBarChartService
