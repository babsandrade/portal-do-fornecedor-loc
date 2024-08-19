// ** React Imports
import { useState } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Third Party Imports
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'

const OverviewTableFinesByType = () => {
  // ** State

  const createData = (code, description, quantity) => {
    return { code, description, quantity }
  }

  const rows = [
    createData('500-20', 'Fine for Failure to indentification of Offendig Driver Imposed on Legal Entity', 44),
    createData('501-00', 'Driving a Vehicle Without Having a Driver´s License or Driving Permit', 1),
    createData(
      '504-50',
      'Driving a Vehicle with a Valid Drive`s License or PPD that has expired for more than 30 days',
      1
    ),
    createData('518-51', 'Letting the Driver Wear a Seat Belt', 3)
  ]

  return (
    <Card>
      <div style={{ backgroundColor: '#003566', margin: '10px', borderRadius: '6px' }}>
        <CardHeader title={<span style={{ color: 'white' }}>Infrações por tipo</span>} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 20 }} size='small'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Código</b>
              </TableCell>
              <TableCell>
                <b>Descrição</b>
              </TableCell>
              <TableCell align='left'>
                <b>Quantidade</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.code}>
                <TableCell component='th' scope='row'>
                  {row.code}
                </TableCell>
                <TableCell align='left'>{row.description}</TableCell>

                <TableCell align='left'>{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Card>
  )
}

export default OverviewTableFinesByType
