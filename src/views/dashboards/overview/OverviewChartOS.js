// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { Bar } from 'react-chartjs-2'

const OverviewChartOS = props => {
  const theme = useTheme()
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary
  const horizontalBarInfo = '#003566'
  const warningColorShade = '#FFC300'

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 4,
          bottomRight: 4
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
    labels: ['Janeiro'],
    datasets: [
      {
        maxBarThickness: 15,
        label: `OS's abertas`,
        backgroundColor: warningColorShade,
        borderColor: 'transparent',
        data: [710]
      },
      {
        maxBarThickness: 15,
        backgroundColor: horizontalBarInfo,
        label: `OS's fechadas`,
        borderColor: 'transparent',
        data: [430]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='OS`s' />
      <CardContent>
        <Bar data={data} height={150} options={options} />
      </CardContent>
    </Card>
  )
}

export default OverviewChartOS
