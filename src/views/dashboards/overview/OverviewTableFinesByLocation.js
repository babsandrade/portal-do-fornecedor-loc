// ** React Imports
import React, { useState } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Third Party Imports
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import Paper from '@mui/material/Paper'
import Icon from 'src/@core/components/icon'
import { useTheme } from '@mui/material/styles'
import { Bar } from 'react-chartjs-2'

const OverviewTableFinesByLocation = () => {
  // ** State
  const [isChart, setIsChart] = useState(false)

  const changeToChart = () => {
    setIsChart(!isChart)
  }

  const createData = (location, quantity) => {
    return { location, quantity }
  }

  const theme = useTheme()
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const horizontalBarInfo = '#003566'

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
      legend: false
    }
  }

  const data = {
    labels: ['Dourados Abbey', 'Open Field', 'Alfenas', 'Araguari'],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: horizontalBarInfo,
        borderColor: 'transparent',
        data: [4, 1, 2, 1]
      }
    ]
  }

  const rows = [
    createData('Dourados Abbey', 4),
    createData('Open Field', 1),
    createData('Alfenas', 2),
    createData('Araguari', 1)
  ]

  return (
    <Card>
      <div style={{ backgroundColor: '#003566', margin: '10px', borderRadius: '6px' }}>
        <CardHeader
          title={
            <span style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
              <span>Multas por local</span>
              <Tooltip title={isChart ? 'Visualizar tabela' : 'Visualizar gráfico'} placement='top'>
                <span style={{ cursor: 'pointer' }} onClick={() => changeToChart()}>
                  <Icon icon={isChart ? 'tabler:table' : 'tabler:chart-bar'} fontSize={20} />
                </span>
              </Tooltip>
            </span>
          }
        />{' '}
      </div>
      {isChart === false ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 20 }} size='small'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Local</b>
                </TableCell>
                <TableCell align='right'>
                  <b>Quantidade</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.location}>
                  <TableCell component='th' scope='row'>
                    {row.location}
                  </TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          {' '}
          <Bar data={data} height={150} options={options} />
        </div>
      )}
    </Card>
  )
}

export default OverviewTableFinesByLocation
