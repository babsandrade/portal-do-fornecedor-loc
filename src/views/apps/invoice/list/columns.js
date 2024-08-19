// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))

export const columns = [
  {
    flex: 0.1,
    field: 'master',
    minWidth: 110,
    headerName: 'MASTER',
    renderCell: ({ row }) => (
      <Typography
        noWrap
        variant='body2'
        component={LinkStyled}
        href={`/apps/invoice/preview/${row.id}`}
      >{`#${row.id}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'cnpj',
    minWidth: 100,
    headerName: 'CNPJ',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.cnpj || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'contract',
    minWidth: 110,
    headerName: 'CONTRATO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.contract || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'agency',
    minWidth: 120,
    headerName: 'AGENCIA',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.agency || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'plate',
    minWidth: 120,
    headerName: 'PLACA',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.plate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'model',
    minWidth: 170,
    headerName: 'MODELO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.model || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'tariffprice',
    minWidth: 140,
    headerName: 'VALOR TARIFA',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.tariffPrice || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'otherprice',
    minWidth: 150,
    headerName: 'VALOR DIVERSOS',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.otherPrice || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'admprice',
    minWidth: 150,
    headerName: 'VALOR TAXA ADM',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.admPrice || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'despensesprice',
    minWidth: 160,
    headerName: 'VALOR DESPESAS',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.despensesPrice || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'billedprice',
    minWidth: 160,
    headerName: 'VALOR FATURADO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.billedPrice || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'documentvalue',
    minWidth: 170,
    headerName: 'VALOR DOCUMENTO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.documentValue || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'documentnumber',
    minWidth: 190,
    headerName: 'NUMERO DOCUMENTO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.documentNumber || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'issuedate',
    minWidth: 130,
    headerName: 'DATA EMISSÃO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.issueDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'expirydate',
    minWidth: 160,
    headerName: 'DATA VENCIMENTO',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.expiryDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Ações',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='View'>
          <IconButton
            size='small'
            component={Link}
            sx={{ color: 'text.secondary' }}
            href={`/apps/invoice/preview/${row.id}`}
          >
            <Icon icon='tabler:eye' />
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
]