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

const OverviewTableCarsByModel = () => {
  // ** State
  const [isChart, setIsChart] = useState(false)

  const changeToChart = () => {
    setIsChart(!isChart)
  }

  const createData = (model, quantity) => {
    return { model, quantity }
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
    labels: [
      'Argo 1,0 6v Flex',
      'Compass Long. Td 250 2.0 4x4 Diesel Aut.',
      'Corolla Xei 2.0 Flex 16v Aut.',
      'Fiorino Endurance Evo 1.4 Flex 8v 2p'
    ],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: horizontalBarInfo,
        borderColor: 'transparent',
        data: [159, 237, 262, 305]
      }
    ]
  }

  const rows = [
    createData('Argo 1,0 6v Flex', 159),
    createData('Compass Long. Td 250 2.0 4x4 Diesel Aut.', 237),
    createData('Corolla Xei 2.0 Flex 16v Aut.', 262),
    createData('Fiorino Endurance Evo 1.4 Flex 8v 2p', 305)
  ]

  return (
    <Card>
      <div style={{ backgroundColor: '#003566', margin: '10px', borderRadius: '6px' }}>
        <CardHeader
          title={
            <span style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
              <span>Veículos por modelo</span>
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
                  <b>Modelo</b>
                </TableCell>
                <TableCell align='right'>
                  <b>Quantidade</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.model}>
                  <TableCell component='th' scope='row'>
                    {row.model}
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

export default OverviewTableCarsByModel
